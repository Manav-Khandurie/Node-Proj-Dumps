from manim import *

class UnionFindVisualization(Scene):
    def construct(self):
        # Create nodes representing elements
        elements = {
            "1": Dot(LEFT * 4, color=BLUE),
            "2": Dot(LEFT * 2, color=BLUE),
            "3": Dot(RIGHT * 2, color=BLUE),
            "4": Dot(RIGHT * 4, color=BLUE),
            "5": Dot(UP * 2, color=BLUE),
            "6": Dot(DOWN * 2, color=BLUE)
        }

        labels = {key: Text(key, font_size=24).next_to(elements[key], UP) for key in elements.keys()}

        # Display the initial set of elements
        self.play(*[Create(node) for node in elements.values()])
        self.play(*[Write(label) for label in labels.values()])

        # Define the Union-Find operations
        unions = [
            ("1", "2"),
            ("3", "4"),
            ("2", "3"),  # This will connect the subset containing 1-2 with the subset containing 3-4
            ("5", "6"),
            ("4", "5")   # This will connect all elements together
        ]

        # Perform the union operations and animate them
        for a, b in unions:
            self.union(elements, a, b)

        # Final wait before ending the scene
        self.wait(2)

    def union(self, elements, a, b):
        """Union operation visualized by connecting two elements."""
        line = Line(elements[a].get_center(), elements[b].get_center(), color=GREEN)
        self.play(Create(line), run_time=1)
        # Adjust positions to reflect the union
        mid_point = (elements[a].get_center() + elements[b].get_center()) / 2
        self.play(
            elements[a].animate.move_to(mid_point),
            elements[b].animate.move_to(mid_point)
        )

    def find(self, element):
        """Find operation placeholder (not visualized in this demo)."""
        # In a full implementation, this would return the root or representative of the set containing the element.
        pass

if __name__ == "__main__":
    from manim import config
    config.pixel_height = 720
    config.pixel_width = 1280
    config.frame_rate = 30
    config.background_color = WHITE

    scene = UnionFindVisualization()
    scene.render()
