import {BooleanBox, useEntry} from "@frc-web-components/react";
import {ReactElement, ReactNode} from "react";



function StatusLight(props: { multiColor?: boolean, sourceKey?: string, children: ReactNode, className?: string}) {
    let {multiColor, sourceKey, children, className} = props;

    const [color,] = useEntry(sourceKey + "color", "#fc53ec");
    const [trueColor,] = useEntry(sourceKey + "trueColor", "#00ff00");
    const [falseColor,] = useEntry(sourceKey + "falseColor", "#ff0000");

    // @ts-ignore
    let label = children.toString();

    let toReturn: ReactElement;

    if (multiColor) {
        toReturn = <BooleanBox value={true} trueColor={color}/>
    } else {
        toReturn = <BooleanBox source-key={sourceKey} trueColor={trueColor} falseColor={falseColor}
                               label={label} className={className}/>
    }

    return (
        toReturn
    )
}

StatusLight.defaultProps = {multiColor: false, sourceKey: ""}

export default StatusLight;