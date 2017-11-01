const math = require('mathjs')

const split = str =>
  str.split(/[^,] /).map(transformation => transformation.trim()).filter(v => v)

const paramsRegexp = [/\(([0-9.deg]+)\)?$/, /\((.+)px, ?(.+)px/]
const parseParams = (str, params) =>
  [...paramsRegexp[params - 1].exec(str)].slice(1).map(val => math.eval(val))

const transformationToMatrix = arr =>
  arr.map(trf => {
    if (/scale/.test(trf)) {
      const [a] = parseParams(trf, 1)
      return math.matrix([[a, 0, 0], [0, a, 0], [0, 0, 1]])
    }

    if (/translate/.test(trf)) {
      const [x, y] = parseParams(trf, 2)
      return math.matrix([[1, 0, x], [0, 1, y], [0, 0, 1]])
    }

    if (/rotate/.test(trf)) {
      const [angle] = parseParams(trf, 1)
      return math.matrix([
        [math.cos(angle), -math.sin(angle), 0],
        [math.sin(angle), math.cos(angle), 0],
        [0, 0, 1]
      ])
    }
  })

const multipl = arr => arr.reduce((m, a) => math.multiply(m, a))

const log = m => {
  const matrix = m
    .toArray()
    .reduce((m, v) => [...m, ...v])
    .map(v => math.round(v, 3))

  console.log(`matrix(${matrix[0]},${matrix[3]},${matrix[1]},${matrix[4]},${matrix[2]},${matrix[5]})`)
}

const toMatrix = input => log(multipl(transformationToMatrix(split(input))))

toMatrix('translate(10px, 10px) scale(1.1) rotate(10deg)')
