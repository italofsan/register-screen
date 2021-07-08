import MaskedInput from "react-text-mask";

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
  name: string;
}

export const CustomInputMask = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;
  // let maskInput: (string | RegExp)[] = [];

  // if (props.name === "cpf") {
  //   return (maskInput = [
  //     /\d/,
  //     /\d/,
  //     /\d/,
  //     ".",
  //     /\d/,
  //     /\d/,
  //     /\d/,
  //     ".",
  //     /\d/,
  //     /\d/,
  //     /\d/,
  //     "-",
  //     /\d/,
  //     /\d/,
  //   ]);
  // }

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        ".",
        /\d/,
        /\d/,
        /\d/,
        ".",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
    />
  );
};
