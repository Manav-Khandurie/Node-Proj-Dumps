from manim import *

class BFSLevelOrder(Scene):
    def construct(self):
        # Define the positions for the tree nodes
        positions = {
            "A": np.array([0, 3, 0]),
            "B": np.array([-2, 1, 0]),
            "C": np.array([2, 1, 0]),
            "D": np.array([-3, -1, 0]),
            "E": np.array([-1, -1, 0]),
            "F": np.array([1, -1, 0]),
            "G": np.array([3, -1, 0])
        }

        # Create tree nodes (dots) and labels
        nodes = {key: Dot(pos, color=BLUE) for key, pos in positions.items()}
        labels = {key: Text(key, font_size=24).next_to(nodes[key], UP) for key in positions.keys()}

        # Define the edges (connections between nodes)
        edges = [
            Line(positions["A"], positions["B"]),
            Line(positions["A"], positions["C"]),
            Line(positions["B"], positions["D"]),
            Line(positions["B"], positions["E"]),
            Line(positions["C"], positions["F"]),
            Line(positions["C"], positions["G"]),
        ]

        # Create all nodes, labels, and edges
        self.play(*[Create(node) for node in nodes.values()])
        self.play(*[Write(label) for label in labels.values()])
        self.play(*[Create(edge) for edge in edges])

        # BFS sequence
        bfs_sequence = ["A", "B", "C", "D", "E", "F", "G"]

        # Highlight each node in BFS order
        for node in bfs_sequence:
            self.play(nodes[node].animate.set_color(RED), run_time=0.5)
            self.wait(0.5)

        self.wait(2)

if __name__ == "__main__":
    from manim import config
    config.pixel_height = 720
    config.pixel_width = 1280
    config.frame_rate = 30
    config.background_color = WHITE

    scene = BFSLevelOrder()
    scene.render()
