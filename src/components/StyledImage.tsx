import { Image as DefaultImage } from 'react-native';


export type ImageProps = DefaultImage['props'];

export function Image(props: ImageProps) {
    return <DefaultImage {...props} style={[props.style, {
        width: '100%',
        height: 150,
        marginBottom: 10,
        resizeMode: 'contain',
        borderRadius: 5,
    }]} />;
}
