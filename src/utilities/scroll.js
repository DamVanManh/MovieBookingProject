import PropTypes from 'prop-types';
export default function Scroll(id, block) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    block: block ? block : "nearest"
  })
}

Scroll.propTypes = {
  id: PropTypes.string.isRequired,
  block: PropTypes.string,
};