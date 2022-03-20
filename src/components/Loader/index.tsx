import { FC } from 'react'
import Lottie from 'react-lottie'
import EarthLottie from '../../assets/lotties/earth.json'

export const Loader: FC = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: EarthLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <div>
            <Lottie options={defaultOptions} height={200} width={200} />
        </div>
    )
}
