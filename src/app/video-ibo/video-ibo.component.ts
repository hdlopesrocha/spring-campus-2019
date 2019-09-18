import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-ibo',
  templateUrl: './video-ibo.component.html',
  styleUrls: ['./video-ibo.component.scss']
})
export class VideoIboComponent implements OnInit {
  code = "// WITHOUT INDEXING\n" +
    "SingleVertex = [\n" +
    "  // first  triangle\n" +
    "  0, 0,\n" +
    "  0, 1,\n" +
    "  1, 0,\n" +
    "  // second triangle\n" +
    "  1, 0,\n" +
    "  0, 1,\n" +
    "  1, 1\n" +
    "];\n" +
    "\n" +
    "// WITH INDEXING\n" +
    "VertexBuffer = [\n" +
    "  0, 0,\n" +
    "  0, 1,\n" +
    "  1, 0,\n" +
    "  1, 1\n" +
    "];\n" +
    "\n" +
    "IndexBuffer = [\n" +
    "  // first  triangle\n" +
    "  0, 1, 2\n" +
    "  // second triangle\n" +
    "  2, 1, 3\n" +
    "];";

  constructor() { }

  ngOnInit() {
  }

}
