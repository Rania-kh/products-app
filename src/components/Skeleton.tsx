import {
    Fade,
    Placeholder,
    PlaceholderMedia
} from "rn-placeholder";
import { StyledView } from "./Themed";

const RectangleSkeleton = () => <PlaceholderMedia style={{ width: '45%', height: 200, marginTop: 20 }} />
export const Skeleton = () => {
    var rectangles = Array(8).fill(['']);
    return (
        <Placeholder Animation={Fade} >
            <StyledView style={{ display: "flex", flex: 1, flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {rectangles.map((rectangle, i) => <RectangleSkeleton key={i} />)}
            </StyledView>
        </Placeholder>
    )
}