import React from 'react';

const monthbox = (props) => {
   return(
    <select type={props.month}  value={props.select} >
<option value="Jan">Jan</option>
<option value="Feb">Feb</option>
<option value="March">March</option>
<option value="April">April</option>
<option value="May">May</option>
<option value="June">June</option>
<option value="July">July</option>
<option value="Aug">Aug</option>
<option value="Sept">Sept</option>
<option value="Oct">Oct</option>
<option value="Nov">Nov</option>
<option value="Dec">Dec</option>
</select>
);
};
export default monthbox;
