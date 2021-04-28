// input: https://www.youtube.com/watch?v=IRG4qg8UXus
//        https://www.youtube.com/embed/IRG4qg8UXus
// output : IRG4qg8UXus

import PropTypes from 'prop-types'

const getVideoId = (urlYoutube) => {
  let videoId
  const indexLastSlash = urlYoutube?.lastIndexOf("/")
  const resultSliceFromSlash = urlYoutube?.slice(indexLastSlash + 1)

  videoId = resultSliceFromSlash
  const findWatch = resultSliceFromSlash?.indexOf("watch");
  if (findWatch !== -1) {
    const indexLastEqual = resultSliceFromSlash?.lastIndexOf("=")
    videoId = resultSliceFromSlash?.slice(indexLastEqual + 1);
  }

  return videoId
}
export default getVideoId

getVideoId.propTypes = {
  urlYoutube: PropTypes.string.isRequired,
};