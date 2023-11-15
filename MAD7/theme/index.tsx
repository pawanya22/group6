export interface Theme {
    background: string;
    text: string;
  }
  
  export const theme: Theme = {
    background: '#eab308',
    text: '#eab308',
  };
  
  export const styles = {
    text: { color: theme.text },
    background: { backgroundColor: theme.background },
  };
  