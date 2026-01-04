export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
};

export const getGradientColor = (value, max = 4) => {
  const percentage = (value / max) * 100;
  
  if (percentage >= 90) return 'from-green-500 to-emerald-600';
  if (percentage >= 80) return 'from-blue-500 to-cyan-600';
  if (percentage >= 70) return 'from-yellow-500 to-amber-600';
  if (percentage >= 60) return 'from-orange-500 to-red-600';
  return 'from-red-500 to-pink-600';
};

export const generateAvatar = (name, size = 32) => {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
  
  const colors = [
    'bg-gradient-to-br from-blue-500 to-purple-500',
    'bg-gradient-to-br from-green-500 to-teal-500',
    'bg-gradient-to-br from-orange-500 to-red-500',
    'bg-gradient-to-br from-purple-500 to-pink-500',
    'bg-gradient-to-br from-cyan-500 to-blue-500',
    'bg-gradient-to-br from-red-500 to-orange-500'
  ];
  
  const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  
  return {
    initials,
    color: colors[colorIndex]
  };
};

export const sortArray = (array, key, direction = 'asc') => {
  return [...array].sort((a, b) => {
    let aVal = a[key];
    let bVal = b[key];
    
    if (typeof aVal === 'string') {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }
    
    if (direction === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });
};

export const filterArray = (array, filters) => {
  return array.filter(item => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value || value === 'ALL') return true;
      
      const itemValue = item[key];
      
      if (Array.isArray(itemValue)) {
        return itemValue.some(val => 
          val.toLowerCase().includes(value.toLowerCase())
        );
      }
      
      if (typeof itemValue === 'string') {
        return itemValue.toLowerCase().includes(value.toLowerCase());
      }
      
      return itemValue === value;
    });
  });
};

export const exportToCSV = (data, filename = 'export.csv') => {
  const headers = Object.keys(data[0]).join(',');
  const rows = data.map(row => 
    Object.values(row).map(value => 
      typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value
    ).join(',')
  ).join('\n');
  
  const csv = `${headers}\n${rows}`;
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const importFromCSV = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const text = event.target.result;
      const lines = text.split('\n');
      const headers = lines[0].split(',');
      
      const data = lines.slice(1).map(line => {
        const values = line.split(',').map(value => 
          value.startsWith('"') && value.endsWith('"') 
            ? value.slice(1, -1).replace(/""/g, '"')
            : value
        );
        
        return headers.reduce((obj, header, index) => {
          obj[header] = values[index];
          return obj;
        }, {});
      });
      
      resolve(data);
    };
    
    reader.onerror = reject;
    reader.readAsText(file);
  });
};