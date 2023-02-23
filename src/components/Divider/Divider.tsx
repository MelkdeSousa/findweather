import { View } from "react-native";

export type DividerProps = {
    top?: number;
    bottom?: number;
}

export default ({
    top = 0,
    bottom = 0,
}: DividerProps) => {
    return (
        <View style={{
            marginTop: top,
            marginBottom: bottom,
        }} />
    )
}
