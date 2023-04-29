import PropTypes from 'prop-types'
import { forwardRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Image.module.scss'

import images from '~/assets/images/index'

const cx = classNames.bind(styles)

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallBack: customFallBack = images.noImage,
      ...props
    },
    ref,
  ) => {
    const [fallBack, setFallback] = useState()

    const handleError = () => {
      setFallback(customFallBack)
    }

    return (
      <img
        className={cx(className, 'wrapper')}
        ref={ref}
        src={fallBack || src}
        alt={alt}
        onError={handleError}
        {...props}
      />
    )
  },
)

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallBack: PropTypes.string,
}

export default Image
