import React, { useState } from 'react';
import {ChatGTPStore} from '../Stores/ChatGPTStore';
interface IPromptScreenProps {

}
export const PromptScreen: React.FC<IPromptScreenProps> = () => {

  var store = new ChatGTPStore();
  
    return (
        <>
        <h3>this is prompt screen!</h3>
        </>
        );
}
