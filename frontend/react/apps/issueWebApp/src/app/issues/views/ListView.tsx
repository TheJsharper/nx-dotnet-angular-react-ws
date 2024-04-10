import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';


export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const onChangeLabel = (labelName: string): void => {
    (selectedLabels.includes(labelName))
      ? setSelectedLabels(selectedLabels.filter((label) => label !== labelName))
      : setSelectedLabels([...selectedLabels, labelName]);

      console.log("Selected ", selectedLabels)
  }
  return (
    <div className="row mt-5">

      <div className="col-8">
        <IssueList />
      </div>

      <div className="col-4">
        <LabelPicker selectedLabel={selectedLabels} onChange={(labelName:string) => onChangeLabel(labelName)} />
      </div>
    </div>
  )
}
