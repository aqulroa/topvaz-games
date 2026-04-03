# Task: Game Logic Improvement & Bug Fixing (Truck Simulation)

## 1. Bug Fix: Collision & Physics
**Issue:** Player character/object gets stuck in the gap between the truck cabin and the trailer.
**Goal:** - Implement a "smooth" collision box or a kinematic constraint that prevents getting wedged in the gap.
- Add a trigger zone or invisible collider to push objects out of the "stuck" area without breaking the physics.

## 2. Dynamic Gameplay & "Controlled Chaos"
**Current State:** Level 1 is too static (just moving forward and jumping).
**Goal:** Add "Drive" and "Dynamic Events." Suggest logic for:
- **Procedural Obstacles:** Debris falling from trailers, road construction, or sudden traffic shifts.
- **Speed Variation:** Implementing a "Flow" state where speed increases based on performance.
- **Camera Shake & VFX:** Add dynamic FOV (Field of View) changes and camera shakes during high-speed maneuvers or near-misses.

## 3. Advanced Truck AI & Steering Logic
**Goal:** Rewrite the AI movement to mimic realistic vehicle physics rather than "sliding on rails."
- **Ackermann Steering Logic:** The AI must rotate its wheels and follow a turning radius consistent with a real vehicle.
- **Human-like Pathfinding:** AI should "look ahead" and start steering into the turn early, simulating a human driver turning the wheel.
- **Avoidance System:** Implement Raycasts or SphereCasts to detect obstacles and steer smoothly around them, adjusting speed dynamically.

## 4. Visuals & Environment (Aesthetic Overhaul)
**Goal:** Improve graphics to look like a "finished indie game" rather than a prototype.
- **Lighting:** Suggest settings for Post-Processing (Bloom, Color Grading/LUT, Ambient Occlusion).
- **Shaders:** Provide a simple "Toon" or "Stylized" shader approach that makes the environment pop without requiring high-end hardware.
- **Atmosphere:** Add suggestions for particle effects (dust from tires, exhaust smoke, motion blur).

---

### Technical Requirements:
- Provide code snippets in [Insert your Language: e.g., C# for Unity / C++ for Unreal / GDScript for Godot].
- Use a modular approach so I can easily integrate these fixes into my current project.
- Focus on performance optimization.