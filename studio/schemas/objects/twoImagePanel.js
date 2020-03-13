export default {
  type: 'array',
  name: 'imagePanel',
  title: 'Image Panel',
  of: [{
    name: 'imagePanelOne',
    type: 'image',
    title: 'Image Panel One',
    fields: [
      {
        name: 'caption',
        type: 'bodyImagePanelCaption'
      },
      {
        name: 'alt',
        type: 'string'
      }
    ]
  }
  ],
    [
      {
        name: 'imagePanelTwo',
        type: 'image',
        title: 'Image Panel Two',
        fields: [
          {
            name: 'caption',
            type: 'bodyImageCaption'
          },
          {
            name: 'alt',
            type: 'string'
          }
        ]
      }
    ]
}
