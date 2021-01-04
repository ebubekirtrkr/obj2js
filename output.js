var vertices = [
	0.418585, -0.504982, 0.141301,
	0.408139, -0.492089, -0.117367,
	0.434955, -1.190502, 0.106472,
	0.424509, -1.177610, -0.152196,
	0.129445, -0.499298, -0.106472,
	0.139891, -0.512190, 0.152196,
	0.145815, -1.184819, -0.141301,
	0.156261, -1.197711, 0.117367,
	0.706656, -0.333278, 0.172509,
	0.689991, -0.359699, -0.084802,
	0.244177, 0.173718, 0.150403,
	0.227512, 0.147297, -0.106908,
	0.895423, -0.173718, -0.117203,
	0.912088, -0.147297, 0.140108,
	0.432944, 0.333278, -0.139309,
	0.449609, 0.359699, 0.118002,
	0.453300, 0.500000, 0.314650,
	0.453300, 0.500000, -0.314650,
	0.453300, -0.500000, 0.314650,
	0.453300, -0.500000, -0.314650,
	-0.453300, 0.500000, -0.314650,
	-0.453300, 0.500000, 0.314650,
	-0.453300, -0.500000, -0.314650,
	-0.453300, -0.500000, 0.314650,
	0.289000, 0.991000, 0.206600,
	0.289000, 0.991000, -0.206600,
	0.289000, 0.505000, 0.206600,
	0.289000, 0.505000, -0.206600,
	-0.254800, 0.991000, -0.206600,
	-0.254800, 0.991000, 0.206600,
	-0.254800, 0.505000, -0.206600,
	-0.254800, 0.505000, 0.206600,
	-0.124273, -0.519130, 0.174495,
	-0.125610, -0.484139, -0.082329,
	-0.108864, -1.199263, 0.081749,
	-0.110201, -1.164272, -0.175074,
	-0.404536, -0.490537, -0.081749,
	-0.403199, -0.525528, 0.175074,
	-0.389127, -1.170670, -0.174495,
	-0.387790, -1.205661, 0.082329,
	-0.277942, 0.111325, 0.116804,
	-0.288910, 0.130227, -0.141473,
	-0.795572, -0.339627, 0.105781,
	-0.806539, -0.320726, -0.152496,
	-0.471828, 0.339627, -0.118381,
	-0.460861, 0.320726, 0.139896,
	-0.989458, -0.111325, -0.129404,
	-0.978490, -0.130227, 0.128873,
]

var normals = [
	0.998900, 0.025800, -0.039100,
	-0.998900, -0.025800, 0.039100,
	-0.023800, 0.998400, 0.050700,
	0.023800, -0.998400, -0.050700,
	0.040300, -0.049700, 0.997900,
	-0.040300, 0.049700, -0.997900,
	-0.736300, -0.666600, 0.116100,
	0.736300, 0.666600, -0.116100,
	0.673600, -0.738400, 0.032200,
	-0.673600, 0.738400, -0.032200,
	0.064300, 0.101900, 0.992700,
	-0.064300, -0.101900, -0.992700,
	1.000000, 0.000000, 0.000000,
	-1.000000, 0.000000, 0.000000,
	0.000000, 1.000000, 0.000000,
	0.000000, -1.000000, 0.000000,
	0.000000, 0.000000, 1.000000,
	0.000000, 0.000000, -1.000000,
	1.000000, 0.000000, 0.000000,
	-1.000000, 0.000000, 0.000000,
	0.000000, 1.000000, 0.000000,
	0.000000, -1.000000, 0.000000,
	0.000000, 0.000000, 1.000000,
	0.000000, 0.000000, -1.000000,
	0.999700, 0.022900, -0.002100,
	-0.999700, -0.022900, 0.002100,
	-0.022400, 0.990600, 0.135100,
	0.022400, -0.990600, -0.135100,
	0.005200, -0.135000, 0.990800,
	-0.005200, 0.135000, -0.990800,
	0.655600, -0.750500, -0.082800,
	-0.655600, 0.750500, 0.082800,
	0.753900, 0.656800, 0.016100,
	-0.753900, -0.656800, -0.016100,
	0.042300, -0.072900, 0.996400,
	-0.042300, 0.072900, -0.996400,
]

var textureCoords = [
	0.000000, 1.000000,
	0.000000, 0.000000,
	1.000000, 0.000000,
	1.000000, 1.000000,
	0.000000, 1.000000,
	0.000000, 0.000000,
	1.000000, 0.000000,
	1.000000, 1.000000,
	0.000000, 1.000000,
	0.000000, 0.000000,
	1.000000, 0.000000,
	1.000000, 1.000000,
	0.000000, 1.000000,
	0.000000, 0.000000,
	1.000000, 0.000000,
	1.000000, 1.000000,
	0.000000, 1.000000,
	0.000000, 0.000000,
	1.000000, 0.000000,
	1.000000, 1.000000,
	0.000000, 1.000000,
	0.000000, 0.000000,
	1.000000, 0.000000,
	1.000000, 1.000000,
]

var quads = [
	1, 1, 1, 3, 2, 1, 4, 3, 1, 2, 4, 1,
	5, 1, 2, 7, 2, 2, 8, 3, 2, 6, 4, 2,
	5, 1, 3, 6, 2, 3, 1, 3, 3, 2, 4, 3,
	8, 1, 4, 7, 2, 4, 4, 3, 4, 3, 4, 4,
	6, 1, 5, 8, 2, 5, 3, 3, 5, 1, 4, 5,
	2, 1, 6, 4, 2, 6, 7, 3, 6, 5, 4, 6,
	9, 5, 7, 11, 6, 7, 12, 7, 7, 10, 8, 7,
	13, 5, 8, 15, 6, 8, 16, 7, 8, 14, 8, 8,
	13, 5, 9, 14, 6, 9, 9, 7, 9, 10, 8, 9,
	16, 5, 10, 15, 6, 10, 12, 7, 10, 11, 8, 10,
	14, 5, 11, 16, 6, 11, 11, 7, 11, 9, 8, 11,
	10, 5, 12, 12, 6, 12, 15, 7, 12, 13, 8, 12,
	17, 9, 13, 19, 10, 13, 20, 11, 13, 18, 12, 13,
	21, 9, 14, 23, 10, 14, 24, 11, 14, 22, 12, 14,
	21, 9, 15, 22, 10, 15, 17, 11, 15, 18, 12, 15,
	24, 9, 16, 23, 10, 16, 20, 11, 16, 19, 12, 16,
	22, 9, 17, 24, 10, 17, 19, 11, 17, 17, 12, 17,
	18, 9, 18, 20, 10, 18, 23, 11, 18, 21, 12, 18,
	25, 13, 19, 27, 14, 19, 28, 15, 19, 26, 16, 19,
	29, 13, 20, 31, 14, 20, 32, 15, 20, 30, 16, 20,
	29, 13, 21, 30, 14, 21, 25, 15, 21, 26, 16, 21,
	32, 13, 22, 31, 14, 22, 28, 15, 22, 27, 16, 22,
	30, 13, 23, 32, 14, 23, 27, 15, 23, 25, 16, 23,
	26, 13, 24, 28, 14, 24, 31, 15, 24, 29, 16, 24,
	33, 17, 25, 35, 18, 25, 36, 19, 25, 34, 20, 25,
	37, 17, 26, 39, 18, 26, 40, 19, 26, 38, 20, 26,
	37, 17, 27, 38, 18, 27, 33, 19, 27, 34, 20, 27,
	40, 17, 28, 39, 18, 28, 36, 19, 28, 35, 20, 28,
	38, 17, 29, 40, 18, 29, 35, 19, 29, 33, 20, 29,
	34, 17, 30, 36, 18, 30, 39, 19, 30, 37, 20, 30,
	41, 21, 31, 43, 22, 31, 44, 23, 31, 42, 24, 31,
	45, 21, 32, 47, 22, 32, 48, 23, 32, 46, 24, 32,
	45, 21, 33, 46, 22, 33, 41, 23, 33, 42, 24, 33,
	48, 21, 34, 47, 22, 34, 44, 23, 34, 43, 24, 34,
	46, 21, 35, 48, 22, 35, 43, 23, 35, 41, 24, 35,
	42, 21, 36, 44, 22, 36, 47, 23, 36, 45, 24, 36,
]

var triangles = [
]
