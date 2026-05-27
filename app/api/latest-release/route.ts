const GITHUB_API = "https://api.github.com/repos/yatishb23/baby-onboard/releases/latest";

export async function GET() {
  const res = await fetch(GITHUB_API, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return Response.json({ error: "Failed to fetch latest release" }, { status: 502 });
  }

  const release = await res.json();
  const setup = release.assets?.find(
    (a: { name: string; browser_download_url: string; content_type: string }) =>
      a.name.includes(".exe") || a.content_type === "application/x-msdownload"
  );

  if (!setup) {
    return Response.json({ error: "No setup asset found" }, { status: 404 });
  }

  return Response.json({
    tag: release.tag_name,
    url: setup.browser_download_url,
    name: setup.name,
  });
}
