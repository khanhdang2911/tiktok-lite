import { forwardRef, useState } from 'react';
import images from '~/assets/images';

function Image({ src, alt, fallback: customFallback = images.avatar, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };
    return <img {...props} src={fallback || src} alt={alt} ref={ref} onError={handleError} />;
}

export default forwardRef(Image);
