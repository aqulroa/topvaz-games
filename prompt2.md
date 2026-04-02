# SYSTEM ARCHITECT: Biome Expansion & Advanced AI Recovery (Phase 4)

The game logic is stable. Now we implement world-building, advanced obstacle avoidance, and a dynamic audio system.

## 1. DYNAMIC AUDIO & PLAYLIST
- **Music Manager**: Implement a playlist of 3-4 Synthwave/Phonk tracks. 
- **State-Based Volume**: 
  - `In-Menu`: Lower volume to 30% and apply a Low-Pass filter if possible.
  - `In-Game`: Full volume (100%).
- **Track Transition**: When a level starts or biomes change, crossfade to a new track.

## 2. "SMART RECOVERY" TRUCK AI
- **Obstacle Awareness**: If a truck's speed drops below 20% of its target for 1.5 seconds (due to a pile-up or hitting a pillar), it must:
  - Immediately check left/right lanes for clearance.
  - Apply a "Steer Out" force to bypass the wreck.
- **Chain Reaction**: If the front row stops, the rows behind should proactively start merging into open lanes 1-2 seconds *before* impact.

## 3. BIOME SYSTEM (25 Levels Total)
Implement a `ThemeManager` that changes the environment based on the level index:
- **Levels 1-5 (Urban)**: Grey asphalt road, skyscraper silhouettes, neon street lights.
- **Levels 6-15 (Desert)**: Sandy/Yellow ground, canyon walls, sandstone pillars, orange-tinted sky.
- **Levels 16-25 (Winter)**: White/Blue ground (snow), pine tree silhouettes, falling snow particles, slippery physics (reduce truck/player friction by 10%).

## 4. PROCEDURAL OBSTACLE REWRITE
- **Smart Obstacles**: Instead of random blocks, create "Patterned Hazards":
  - `The Zig-Zag`: Staggered walls that force the whole convoy to snake.
  - `The Bridge`: A narrow elevated section where falling off the side leads to "Lava".
  - `The Tunnel`: Low ceiling obstacles that require the player to crouch or jump precisely.

## INSTRUCTIONS FOR AGENT:
Use `replace_file_content` to update:
1. `AudioManager` (Playlist & Menu volume).
2. `TruckAI` (Improved obstacle avoidance & lane switching).
3. `ThemeManager` (Visual assets & colors for Urban/Desert/Winter).
4. `LevelGenerator` (Patterned hazards).