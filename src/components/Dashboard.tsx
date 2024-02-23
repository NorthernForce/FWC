import {BasicFmsInfo, Field, FieldRobot, SendableChooser, ToggleButton, useEntry} from "@frc-web-components/react";
import {CSSProperties} from "react";

const Dashboard = () => {
    const [toggled, setToggled] = useEntry("/dashboard/toggled", false);
    const [pose] = useEntry("/SmartDashboard/Field/Robot", [0, 0, 0]);

    const updateToggle = () => {
        setToggled(!toggled);
    };

    const divStyles: CSSProperties = {
        display: "flex",
        gap: "15px",
        alignItems: "start",
    };

    const fieldStyles: CSSProperties = {
        width: "500px",
        height: "300px",
    };

    return (
        <>
            <div style={divStyles}>
                <SendableChooser source-key="/Shuffleboard/Autonomous/SendableChooser[0]" />
                <BasicFmsInfo source-key="/FMSInfo" />
                <ToggleButton
                    label="Toggle Button"
                    toggled={toggled}
                    ontoggle={updateToggle}
                />
            </div>
            <Field
                style={fieldStyles}
                cropLeft={0.1}
                cropRight={0.9}
                rotationUnit="deg"
            >
                <FieldRobot color="blue" opacity={1} pose={pose} />
            </Field>
        </>
    );
};

export default Dashboard;
