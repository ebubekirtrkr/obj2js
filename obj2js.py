import argparse

arg_parser = argparse.ArgumentParser(prog='python3 obj2js.py',
                                    usage='%(prog)s <input>.obj <output>.js',
                                    description='Convert .obj file into javascript arrays.')

arg_parser.add_argument('input',
                       metavar='<input file>',
                       type=str,
                       help='input .obj filename')
arg_parser.add_argument('output',
                       metavar='<output file>',
                       type=str,
                       help='output .js filename')
args = arg_parser.parse_args()

input_file = open(f"{args.input}", "r")
output_file = open("output.js", "w+")


vertices = "var vertices = [\n"  # from v lines
normals = "var normals = [\n"  # from vn lines
textureCoords = "var textureCoords = [\n"  # from vn lines
quads = "var quads = [\n"  # from f lines with 4 group
triangles = "var triangles = [\n"  # from f lines with 3 group

vertice_count=0
normal_count=0
textureCoord_count=0
quad_count=0
triangle_count=0
for line in input_file.read().splitlines():
    items = line.split()
    if line.startswith("v "):
        # ['v', 'x', 'y', 'z']
        vertices += f"\t{items[1]}, {items[2]}, {items[3]},\n"
        vertice_count+=1
    elif line.startswith("vn "):
        # ['vn', 'x', 'y', 'z']
        normals += f"\t{items[1]}, {items[2]}, {items[3]},\n"
        normal_count+=1
    elif line.startswith("vt "):
        if len(items) > 3: # if texture coordinates has more than 2 items
            # ['vt', 'x', 'y', 'z']
            textureCoords += f"\t{items[1]}, {items[2]}, {items[3]},\n"
        else:
            textureCoords += f"\t{items[1]}, {items[2]},\n"  # ['vt', 'x', 'y']
        textureCoord_count+=1
    elif line.startswith("f "):
        # turn 1/1/1 into 1, 1, 1,
        first_group = ', '.join(items[1].split("/"))
        second_group = ', '.join(items[2].split("/"))
        third_group = ', '.join(items[3].split("/"))
        if len(items) > 4:
            fourth_group = ', '.join(items[4].split("/"))
            # add to quads
            quads += f"\t{first_group}, {second_group}, {third_group}, {fourth_group},\n"
            quad_count+=1
        else:
            # add to triangles
            triangles += f"\t{first_group}, {second_group}, {third_group},\n"
            triangle_count+=1


vertices += "]\n\n"
normals += "]\n\n"
textureCoords += "]\n\n"
quads += "]\n\n"
triangles += "]\n\n"

output_file.write(vertices)
output_file.write(normals)
output_file.write(textureCoords)
output_file.write(quads)
output_file.write(triangles)
print(f"Summary:")
print(f"Vertice Count: {vertice_count}")
print(f"Normal Count: {normal_count}")
print(f"Texture Coordinat Count: {textureCoord_count}")
print(f"Quad Count: {quad_count}")
print(f"Triangle Count: {triangle_count}")