import Styled from "styled-components";

export const Form = Styled.form`  
  width: 90%;
  margin: 0 auto;
  height: auto;
  display:grid;
  grid-template-columns: 1fr 1px 1fr; 
  gap:30px;

  
 
  .content-user{
   
    display: grid;
    grid-template-row: repeat(7,1fr); 
    gap:10px;
    padding:20px;
  
  input{
    height:36px;
  }
  }
  .space{
  background:#f1f1ff;
  }
  .content-problem{
    display: grid;
    grid-template-row: repeat(8,1fr); 
     gap:10px;
    padding:20px;
  }

  .content-input{
     
      display:grid;
      grid-template-columns: repeat(2,1fr); gap:10px;    

      input{
    height:36px;
  } 
  }
 
 textarea{
   padding:9.5px 14px;
   border-radius: .28571429rem;
  border:1px solid rgba(34,36,38,.15);
    color: rgba(0,0,0,.87);
 }
  input{
      width:100%; height:36px;
  }

  span{
    font-size:11px;
    font-weight: normal
  }
`;
