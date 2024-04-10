import { FC } from "react";
import { LoadingIcon } from "../../../shared/components/loadingIcon";
import { useLabels } from "../hooks/useLabels";

interface LabelPickerProps {
  selectedLabel: string[],
  onChange(labelName: string): void;
}

export const LabelPicker: FC<LabelPickerProps> = ({ selectedLabel, onChange }) => {
  const { labelsQuery } = useLabels();

  if (labelsQuery.isFetching) return (<LoadingIcon />)
  return (
    <div>
      {
        labelsQuery.data?.map((label) => (
          <span key={label.id}
            className={`badge rounded-pill m-1 label-picker ${selectedLabel.includes(label.name) ? 'label-active' : ''}`}
            style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
            onClick={() => onChange(label.name)}
          >
            {label.name}
          </span>
        ))
      }
    </div>
  )
}
