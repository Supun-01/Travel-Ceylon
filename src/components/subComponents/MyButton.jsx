
function MyButton(props) {
    const paddingX = props.buttonWidth ? `${props.buttonWidth * 0.25}rem` : "2.5rem";
    const paddingY = props.buttonHeight ? `${buttonHeight * 0.25}rem` : "0.5rem";
    const bgColor = props.buttonColor
    const textColor = props.buttonTextColor
    const borderColor = props.buttonBoderColor
    const borderWidth = props.buttonBorderWidth

    return (
        <div className="my-10 py-2">

            <button style={{
                paddingLeft: paddingX,
                paddingRight: paddingX,
                paddingBottom: paddingY,
                paddingTop: paddingY,
                backgroundColor: bgColor,
                color: textColor,

                borderColor: borderColor,
                borderWidth: borderWidth,
                borderStyle: "solid"

            }}
                className="rounded-2xl font-bold">
                {props.buttonContent}
            </button>

        </div>
    );
}

export default MyButton;
