export const loginUser = async (username: string, password: string) => {
    const response = await fetch('http://localhost:8000/login', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ username, password }),
    });
   
    if (!response.ok) {
       throw new Error('Login failed');
    }
   
    return response.json();
   };

export const logoutUser = async (token: string) => {
   const response = await fetch('http://localhost:8000/logout', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
         },
   });

   if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Logout failed: ${JSON.stringify(errorData)}`);
   }

   return;
};