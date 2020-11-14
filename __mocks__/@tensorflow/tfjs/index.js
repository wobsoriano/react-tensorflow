const tf = require('@tensorflow/tfjs')

module.exports = {
  ...tf,
  loadGraphModel: () =>
    new Promise((res, _) => res({ name: 'TF Graph Model' })),
  loadLayersModel: () =>
    new Promise((res, _) => res({ name: 'TF Layer Model' })),
  data: {
    ...tf.data,
    webcam: () => ({
      capture: () =>
        tf.tensor3d([
          [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
          ],
          [
            [1, 1, 1],
            [11, 12, 13],
            [14, 15, 16],
            [1, 1, 1]
          ],
          [
            [1, 1, 1],
            [1, 2, 3],
            [4, 5, 6],
            [1, 1, 1]
          ],
          [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
          ]
        ])
    })
  }
}
