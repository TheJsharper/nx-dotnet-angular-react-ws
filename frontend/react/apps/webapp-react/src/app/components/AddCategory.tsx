import { ChangeEvent, useState, SyntheticEvent, BaseSyntheticEvent } from "react";


export interface AddCategory {
    setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddCategory = (props: AddCategory) => {
    const [value, setInput] = useState<string>('');

    const onInputChange = (newValue: ChangeEvent<HTMLInputElement>) => {

        setInput(newValue.target.value);
    }


    const onSubmit = (event: BaseSyntheticEvent) => {
        event.preventDefault();
        if (value.trim().length <= 1) return;

        props.setCategories((categories: Array<string>) => {
            return categories.includes(value) ? [...categories] : [value, ...categories]
        })
        setInput('');

    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>

            <input type="text" placeholder=" search gifs...." value={value} onChange={(value) => onInputChange(value)} />
        </form>
    );
}