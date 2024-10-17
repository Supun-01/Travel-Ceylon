function Button(props) {
    // Change the height of the button.
    const paddingHight = (props.ButtonHeight != "") ? String(`py-${parseInt(props.ButtonHeight)}`) : "py-2";

    // Change the width of the button.
    const paddingWidth = (props.ButtonWidth != "") ? String(`px-${parseInt(props.ButtonWidth)}`) : "px-2"


    console.log(paddingHight)
    console.log(paddingWidth)

    return (
        <div className="py-">
            <button className={`drop-shadow-md bg-pink-600 text-white font-bold ${paddingHight} ${paddingWidth} rounded-2xl hover:bg-pink-800`}>
                {props.ButtonText}
            </button>
        </div>
    )
}

export default Button