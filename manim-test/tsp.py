from manim import *

class TravelingSalesmanProblem(Scene):
    def construct(self):
        # Define the cities (points) and their positions
        cities = [
            np.array([1, 2, 0]),
            np.array([3, 2, 0]),
            np.array([4, 0, 0]),
            np.array([2, -2, 0]),
            np.array([0, 0, 0])
        ]

        # Create city dots and labels
        city_dots = [Dot(city, color=BLUE) for city in cities]
        city_labels = [Text(f"{i+1}", font_size=24).next_to(city_dots[i], UP) for i in range(len(cities))]

        # Create city paths (edges) for TSP route
        path_indices = [0, 1, 2, 3, 4, 0]  # Example path: 1 -> 2 -> 3 -> 4 -> 5 -> 1
        edges = [
            Line(cities[path_indices[i]], cities[path_indices[i + 1]], color=YELLOW)
            for i in range(len(cities))
        ]

        # Animation
        self.play(*[Create(dot) for dot in city_dots])
        self.play(*[Write(label) for label in city_labels])

        for edge in edges:
            self.play(Create(edge), run_time=1)

        # Display the title
        title = Text("Traveling Salesman Problem", font_size=36)
        self.play(Write(title))
        self.wait(2)
        self.play(FadeOut(title))

        # End scene with the completed path
        self.wait(2)

if __name__ == "__main__":
    from manim import config
    config.pixel_height = 720
    config.pixel_width = 1280
    config.frame_rate = 30
    config.background_color = WHITE

    scene = TravelingSalesmanProblem()
    scene.render()
