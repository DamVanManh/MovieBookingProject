import PropTypes from 'prop-types';
export default function Scroll(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  })
}

Scroll.propTypes = {
  id: PropTypes.string.isRequired,
};