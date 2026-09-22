from PIL import Image
from pathlib import Path

src = Path("public/images/favicon.png")
img = Image.open(src).convert("RGBA")
print("source", img.size)

out = Path("public")
out.mkdir(exist_ok=True)


def save_png(size: int, name: str) -> Image.Image:
    resized = img.resize((size, size), Image.Resampling.LANCZOS)
    path = out / name
    resized.save(path, format="PNG", optimize=True)
    print("wrote", path, size, path.stat().st_size)
    return resized


i16 = save_png(16, "favicon-16x16.png")
i32 = save_png(32, "favicon-32x32.png")
i48 = save_png(48, "favicon-48x48.png")
save_png(180, "apple-touch-icon.png")

# Compatibility alias
i48.save(out / "favicon.png", format="PNG", optimize=True)
print("wrote favicon.png", (out / "favicon.png").stat().st_size)

# Multi-size ICO
img.save(
    out / "favicon.ico",
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)],
)
print("wrote favicon.ico", (out / "favicon.ico").stat().st_size)

for name in [
    "favicon.ico",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "favicon-48x48.png",
    "apple-touch-icon.png",
    "favicon.png",
]:
    p = out / name
    with Image.open(p) as im:
        print(name, im.size, im.format)
