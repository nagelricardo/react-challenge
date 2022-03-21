import Lottie from 'react-lottie';
import * as LoadingAnimation from '../../../public/Loading.json'

export function Loading() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: LoadingAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div>
      <Lottie options={defaultOptions}
            height={50}
            width={50} 
        />
    </div>
    )
}