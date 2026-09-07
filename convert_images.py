from PIL import Image
from pathlib import Path
import re


# =========================
# PATHS
# =========================

projects_folder = Path("images/projects")
script_file = Path("script.js")


# =========================
# 1. CONVERT NEW JPG FILES
# =========================

jpg_files = sorted(projects_folder.glob("*.jpg"))

for image_path in jpg_files:

    output_path = image_path.with_suffix(".webp")

    # Skip files already converted
    if output_path.exists():
        print(f"Skipped: {output_path.name}")
        continue

    with Image.open(image_path) as image:

        image.save(
            output_path,
            "WEBP",
            quality=82,
            method=6
        )

    print(f"Created: {output_path.name}")


# =========================
# 2. BUILD GALLERY LIST
# =========================

image_names = [
    image.name
    for image in jpg_files
]


new_array = "const projectImages = [\n"

for image_name in image_names:
    new_array += f'    "{image_name}",\n'

new_array += "];"


# =========================
# 3. UPDATE SCRIPT.JS
# =========================

script_content = script_file.read_text(
    encoding="utf-8"
)


pattern = re.compile(
    r"const projectImages\s*=\s*\[.*?\];",
    re.DOTALL
)


if pattern.search(script_content):

    updated_script = pattern.sub(
        new_array,
        script_content
    )

    script_file.write_text(
        updated_script,
        encoding="utf-8"
    )

    print(
        f"Updated gallery list with "
        f"{len(image_names)} images."
    )

else:

    print(
        "Could not find projectImages "
        "inside script.js."
    )


print("\nGallery update complete.")