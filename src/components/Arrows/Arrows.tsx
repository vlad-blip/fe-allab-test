import styles from './Arrows.module.css';

const ArrowLeft = () => {
    return (
        <svg className={styles.icon_arrow} width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.4974 1.11313C9.67041 0.286133 8.32959 0.286134 7.5026 1.11313L1.51299 7.10274C0.685994 7.92973 0.685994 9.27055 1.51299 10.0975L7.5026 16.0872C8.32959 16.9141 9.67041 16.9141 10.4974 16.0872C11.3244 15.2602 11.3244 13.9193 10.4974 13.0923L6.00519 8.60014L10.4974 4.10793C11.3244 3.28094 11.3244 1.94012 10.4974 1.11313Z" fill="#BEC2CE"/>
        </svg>
    );
};

const ArrowRight = () => {
    return (
        <svg className={styles.icon_arrow} width="14" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.802402 1.51303C1.62939 0.686035 2.97022 0.686036 3.79721 1.51303L9.78682 7.50264C10.6138 8.32963 10.6138 9.67045 9.78682 10.4974L3.79721 16.4871C2.97022 17.314 1.62939 17.314 0.802403 16.4871C-0.0245899 15.6601 -0.0245886 14.3192 0.802403 13.4922L5.29461 9.00004L0.802401 4.50783C-0.0245908 3.68084 -0.0245903 2.34002 0.802402 1.51303Z" fill="#BEC2CE"/>
        </svg>
    );
}

const ArrowLeftThin = () => {
    return (
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.66053 0.401157C10.1272 0.915451 10.108 1.72975 9.61804 2.21833L3.37247 8.69844C3.21164 8.8613 3.21164 9.13559 3.37247 9.29845L9.62137 15.7786C10.1105 16.2671 10.128 17.0814 9.66053 17.5957C9.19305 18.1186 8.41725 18.1357 7.92894 17.6386L0.390931 9.96703C-0.114047 9.45274 -0.13238 8.61272 0.350933 8.08129L7.92894 0.358299V0.358299C8.41809 -0.138852 9.19389 -0.113138 9.66053 0.401157Z" fill="#384564"/>
        </svg>
    );
};

export { ArrowLeft, ArrowRight, ArrowLeftThin };