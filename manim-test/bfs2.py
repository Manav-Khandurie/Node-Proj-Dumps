from manim import *

class BFSWithQueue(Scene):
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

        # Initialize the BFS queue
        queue = ["A"]
        queue_display = self.create_queue_display(queue)

        # BFS sequence and queue management
        bfs_sequence = []
        visited_nodes = set()

        while queue:
            current_node = queue.pop(0)
            bfs_sequence.append(current_node)
            visited_nodes.add(current_node)

            # Update queue display
            self.update_queue_display(queue_display, queue)

            # Highlight current node
            self.play(nodes[current_node].animate.set_color(RED), run_time=0.5)
            self.wait(0.5)

            # Enqueue children if not visited
            for child in self.get_children(current_node):
                if child not in visited_nodes and child not in queue:
                    queue.append(child)
                    self.update_queue_display(queue_display, queue)
        
        # Final wait before ending the scene
        self.wait(2)

    def create_queue_display(self, queue):
        """Create the initial queue display with the given queue."""
        queue_texts = [Text(f"{item}", font_size=24, color=BLUE) for item in queue]
        queue_group = VGroup(*queue_texts).arrange(RIGHT, buff=0.5).to_edge(DOWN)
        self.play(FadeIn(queue_group))
        return queue_group

    def update_queue_display(self, queue_display, queue):
        """Update the queue display to reflect the current state of the queue."""
        self.play(FadeOut(queue_display))
        new_queue_display = self.create_queue_display(queue)
        self.play(Transform(queue_display, new_queue_display))
        return queue_display

    def get_children(self, node):
        """Returns the children of a node in the BFS order."""
        children = {
            "A": ["B", "C"],
            "B": ["D", "E"],
            "C": ["F", "G"],
            "D": [],
            "E": [],
            "F": [],
            "G": []
        }
        return children[node]

if __name__ == "__main__":
    from manim import config
    config.pixel_height = 720
    config.pixel_width = 1280
    config.frame_rate = 30
    config.background_color = WHITE

    scene = BFSWithQueue()
    scene.render()
