---
title: 
date: 2023-08-07 22:46
tags: ['tag']
---

## Torch Tensor Format

### Converting from CSV #1

To convert your time-series training and testing data from CSV files into a format similar to PyTorch's MNIST dataset, you can follow these steps:

1. Read the CSV files to load the data and labels.
2. Convert the data and labels into PyTorch tensors.
3. Create a custom dataset class using PyTorch's `torch.utils.data.Dataset` class.
4. Use the `torch.utils.data.DataLoader` to create data loaders for training and testing.

Here's a step-by-step guide with code examples:

Assuming you have CSV files named `train_data.csv`, `train_labels.csv`, `test_data.csv`, and `test_labels.csv`, where each row corresponds to a time-series data sample and its corresponding label.

```python
import torch
import pandas as pd
from torch.utils.data import Dataset, DataLoader

# Step 1: Load the CSV files
train_data = pd.read_csv('train_data.csv')
train_labels = pd.read_csv('train_labels.csv')
test_data = pd.read_csv('test_data.csv')
test_labels = pd.read_csv('test_labels.csv')

# Step 2: Convert data and labels to PyTorch tensors
train_data = torch.tensor(train_data.values, dtype=torch.float32)
train_labels = torch.tensor(train_labels.values, dtype=torch.long)
test_data = torch.tensor(test_data.values, dtype=torch.float32)
test_labels = torch.tensor(test_labels.values, dtype=torch.long)

# Step 3: Create a custom dataset class
class TimeSeriesDataset(Dataset):
    def __init__(self, data, labels):
        self.data = data
        self.labels = labels
        
    def __len__(self):
        return len(self.data)
    
    def __getitem__(self, idx):
        sample = {'data': self.data[idx], 'label': self.labels[idx]}
        return sample

# Step 4: Create data loaders
batch_size = 64

train_dataset = TimeSeriesDataset(train_data, train_labels)
train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)

test_dataset = TimeSeriesDataset(test_data, test_labels)
test_loader = DataLoader(test_dataset, batch_size=batch_size, shuffle=False)
```

Now you have `train_loader` and `test_loader` data loaders that you can use for training and testing your time-series data with PyTorch. Each iteration of the data loader will provide a batch of time-series samples and their corresponding labels in the PyTorch format, similar to how the MNIST dataset is typically used. You can replace the data loading and CSV file paths with your actual data files and labels.

### Converting from CSV #2

To convert the CSV files into a format similar to the Pytorch format of MNIST data, you'll need to follow a series of steps. The PyTorch MNIST dataset is a `torchvision.datasets.MNIST` object, which is a subclass of `torch.utils.data.Dataset`. This class is designed to allow easy access to datasets in a format that PyTorch can use.

Here's a step-by-step guide:

1. **Read the CSV file**

First, you need to read the CSV files. You can use the `pandas` library's `read_csv` function for this. This function will return a DataFrame object.

```python
import pandas as pd

train_df = pd.read_csv('train.csv')
test_df = pd.read_csv('test.csv')
```

[Source 1](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html)

1. **Convert DataFrames to PyTorch Tensors**

Once you have the data in DataFrame format, you'll need to convert it to PyTorch tensors. This can be done using the `torch.tensor` function. Remember to convert the data to float for the inputs (time-series data) and to long for the labels.

```python
import torch

train_data = torch.tensor(train_df.iloc[:, :-1].values).float()
train_labels = torch.tensor(train_df.iloc[:, -1].values).long()

test_data = torch.tensor(test_df.iloc[:, :-1].values).float()
test_labels = torch.tensor(test_df.iloc[:, -1].values).long()
```

[Source 2](https://pytorch.org/docs/stable/generated/torch.tensor.html)

1. **Create a Dataset**

Next, you need to create a custom Dataset class. This class should inherit from `torch.utils.data.Dataset` and override the `__len__` and `__getitem__` methods.

```python
from torch.utils.data import Dataset

class TimeSeriesDataset(Dataset):
    def __init__(self, data, labels):
        self.data = data
        self.labels = labels
    
    def __len__(self):
        return len(self.data)
    
    def __getitem__(self, idx):
        return self.data[idx], self.labels[idx]
```

[Source 3](https://pytorch.org/tutorials/beginner/data_loading_tutorial.html)

1. **Create Data Loaders**

Finally, you can create your DataLoader objects. These will allow you to iterate over your dataset in batches.

```python
from torch.utils.data import DataLoader

train_dataset = TimeSeriesDataset(train_data, train_labels)
test_dataset = TimeSeriesDataset(test_data, test_labels)

train_loader = DataLoader(train_dataset, batch_size=64, shuffle=True)
test_loader = DataLoader(test_dataset, batch_size=64, shuffle=True)
```

[Source 4](https://pytorch.org/docs/stable/data.html)

Now, you can use `train_loader` and `test_loader` in the same way as you would use the MNIST data loaders in PyTorch.

### Converting #4

```python
import pandas as pd
from torchvision import datasets
import torch

# Load training data
train_df = pd.read_csv('train_data.csv') 
train_labels = pd.read_csv('train_labels.csv')

# Load test data 
test_df = pd.read_csv('test_data.csv')
test_labels = pd.read_csv('test_labels.csv') 

# Convert to Tensor datasets
train_data = torch.Tensor(train_df.values)
train_labels = torch.LongTensor(train_labels.values)
test_data = torch.Tensor(test_df.values) 
test_labels = torch.LongTensor(test_labels.values)

# Create PyTorch dataset objects
train_dataset = datasets.TensorDataset(train_data, train_labels)
test_dataset = datasets.TensorDataset(test_data, test_labels)

# Access with indices
sample = train_dataset[0]
print(sample[0], sample[1])
```
