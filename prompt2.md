# ARCHITECTURAL PATCH: Physics, AI & Environment Polish

## 1. PLAYER PHYSICS REBALANCE (The "Anti-Skipping" Fix)
- **Nerf Momentum**: Reduce `airAcceleration` by 40% and `maxSpeed` by 20%. 
- **Air Drag**: Increase the linear damping in the physics engine specifically for the player when `isOnGround` is false.
- **Result**: The player must now rely on jumping from truck to truck rather than soaring over the entire map.

## 2. TRUCK AI: "THE CONVOY CHAOS"
- **Alignment Logic**: Trucks should not just move forward. Implement a "Boid-like" or "Lane-keeping" behavior where they try to maintain a formation of 3 parallel lines.
- **Side-Slamming (Sideswiping)**: Add a logic where trucks occasionally steer into each other or "nudge" neighbors to stay in formation, creating physical collisions and unpredictable tilting.
- **Torque Physics**: Ensure that when trucks collide, they apply torque/rotation so they can flip, roll, or create "pile-ups" like in the original game.

## 3. LEVEL DESIGN & OBSTACLES (Level 2+)
- **Dynamic Chokepoints**: Starting Level 2, place "The Needle" (two narrow pillars) or "The Funnel" (angled walls) that force the 3-lane convoy to squeeze into 1 or 2 lanes. 
- **Increasing Complexity**: Each subsequent level should reduce the width of these gaps or add staggered "Slalom" pillars.

## 4. WORLD & VISUALS (The Atmosphere)
- **Sky & Sun**: Implement a `THREE.Sky` shader or a high-contrast Gradient Background (Deep Blue to Orange/Sunset).
- **Landscape**: Add a "Canyon" or "Mountain" silhouette using low-poly `BoxGeometry` or `PlaneGeometry` with noise, flanking the road.
- **The Road**: Replace the void with a textured or glowing grid "Highway" that scrolls to give a sense of immense speed.

## OUTPUT REQUIREMENT:
Update the following modules: 
1. `PlayerController` (Movement nerf logic).
2. `TruckManager` (Convoy formation and side-slamming logic).
3. `Environment` (Sky, Sun, and Road visuals).
4. `LevelGenerator` (Obstacle logic for Level 2+).