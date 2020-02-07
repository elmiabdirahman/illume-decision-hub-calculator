import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import '../AdminEditCalc/AdminEditCalc.css';
import AdminCalcSubquestion from '../AdminCalcSubquestion/AdminCalcSubquestion';

export default function AdminCalcQuestion(props) {

  const subQuestion = useSelector((state)=>state.admin.adminSubquestion);
  const dispatch = useDispatch();
  const [question, setQuestion] = useState(props.question);
  const [tooltip, setTooltip] = useState(props.tooltip);

  // Dispatch to saga to update question and tooltip in database
  const handleSave = () => {
    let id = [props.id, question, tooltip, props.calcID];
    dispatch({type: `PUT_ADMIN_QUESTION`, payload: id});
  }

  // Runs when component mounts
  useEffect(()=>{
    if(props.id === 3 || props.id === 4){
      dispatch({type: `GET_ADMIN_SUB_QUESTION`, payload: props.id});
    }
  }, [props.id]);

  return(
    <>
      <textarea 
        rows="6" 
        cols="30" 
        value={question} 
        onChange={(event)=>setQuestion(event.target.value)} 
      />
      <textarea 
        rows="6" 
        cols="30" 
        value={tooltip} 
        onChange={(event)=>setTooltip(event.target.value)} 
      />
      <button className="normal-btn admin-edit-calc-btn" onClick={handleSave}>SAVE</button>
      <div>
      {props.id === 3 || props.id === 4 ?
        subQuestion.map(q=>
          <div key={q.id}>
            <AdminCalcSubquestion id={q.id} question={q.question} tooltip={q.help_text} calcID={props.calcID} />
          </div>
        )
        :
        ''
      }
      </div>
    </>
  );
}