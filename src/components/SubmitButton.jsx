import { useFormStatus } from "react-dom";

export default function SubmitButton({title}) {
    const {pending} = useFormStatus();

    return (
        <button
            type="submit"
            className="w-full bg-[#192D30] text-white py-2 px-4 rounded-md hover:bg-[#234046] transition cursor-pointer"
            disabled={pending}
        >
            {title}
        </button>
    );
}