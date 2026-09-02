# LGCM - Local Generation Content Monster

LGCM is a local prompt constructor for creating monster concepts in a consistent game-ready visual style.

The project uses the supplied monster generation document as a source of design structure only:

- stable full-body reference template;
- body plan as the main variation axis;
- origin, build, head, limbs, material, and one dominant feature;
- role-based monster generation;
- biome scaling for large libraries;
- 3D-friendly quality constraints.

## Run

Open `index.html` in a browser, or run `start-lgcm.bat`.

No server and no external dependencies are required.

## Workflow

1. Choose biome, role, body plan, origin, anatomy, material, and one strong feature.
2. Copy the generated English prompt.
3. Use `Batch` to create a numbered prompt list for a larger creature library.
4. Keep the QA list green: one creature, readable silhouette, separated limbs, plain background, moderate detail, suitable for 3D.
5. Extend any dropdown list in the app by adding a Russian UI label and an English prompt phrase. Custom options are saved in browser local storage.

## Output Principle

Only the first descriptive block changes from monster to monster. Composition, background, lighting, detail level, and negative constraints stay stable for consistency.
