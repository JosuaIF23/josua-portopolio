import YARLightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'

export default function Lightbox({ open, close, slides, index }) {
  return (
    <YARLightbox
      open={open}
      close={close}
      slides={slides}
      index={index}
      plugins={[Captions, Zoom]}
      captions={{ showToggle: true, descriptionTextAlign: 'center' }}
      styles={{ container: { backgroundColor: 'rgba(0,0,0,0.95)' } }}
    />
  )
}
