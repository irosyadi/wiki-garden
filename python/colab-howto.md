---
aliases: [Google Colaboratory How To]
title: Google Colaboratory How To
date: 2023-01-09 11:46
tags: ['tag1', 'tag2']
---

# Google Colaboratory How To

## Comment

- Block comment text using Ctrl+/.
- _Tools->Keyboard Shortcuts_ and search for "Comment Current Line".

## Google Drive Connection

```python
from google.colab import drive  
drive.mount('/content/gdrive')
```

```
url = 'gdrive/MyDrive/Dataset/file.zip'
```

### Ref:

- [How to Deal With Files in Google Colab: Everything You Need to Know - neptune.ai](https://neptune.ai/blog/google-colab-dealing-with-files)
- [Using Google Colab GPU VM + Drive as persistent storage for long Deep Learning training runs | by Prajwal Prashanth | Medium](https://medium.com/@prajwal.prashanth22/google-colab-drive-as-persistent-storage-for-long-training-runs-cb82bc1d5b71)

## Google Colab Background Run

- Free Google Colab. There are no official references for 'Idle' and 'Maximum Lifetime' durations, but [testing done by Korakot Chaovavanich](https://stackoverflow.com/a/47805171/10359765) shows that:
    - The **'maximum lifetime'** of a running notebook is **12 hours** (browser open)
    - An **'Idle'** notebook instance cuts-off after **90 minutes**
    - You can have a maximum of **2 notebooks** running concurrently
    - If you close the notebook window and open it while the instance is still running, the cell outputs and variables will still persist. However if the notebook instance has been recycled, your cell outputs and variables will no longer be available.
    - WA sneaky workaround you can try is to have the Colabs instance open in your mobile browser in order to prevent the instance from being considered "Idle".
- Google Colab Pro+
  - Background execution is enabled by default on all Colab Pro+ sessions.
  - Click on Runtime option in the top left menu, then click on change runtime type, there you will see a checkbox for Background execution, check it and you can enjoy the benefit of Colab Pro+
- Comparison Free : Pro : Pro+ <https://colab.research.google.com/signup>
- How to prevent timeout
  - [Google Colab session timeout - Stack Overflow](https://stackoverflow.com/questions/54057011/google-colab-session-timeout)
  - [python - How can I prevent Google Colab from disconnecting? - Stack Overflow](https://stackoverflow.com/questions/57113226/how-can-i-prevent-google-colab-from-disconnecting)
  - [How to save Google Colab Notebooks from runtime timeouts | by Sourabh | Analytics Vidhya | Medium](https://medium.com/analytics-vidhya/how-to-save-google-colab-notebooks-from-runtime-timeouts-4aa133375a7e) AutoHotKey

## Hardware Specs

- disk information `!df -h`.
- CPU specs `!cat /proc/cpuinfo`
- memory specs `!cat /proc/meminfo`
- Test specs <https://colab.research.google.com/drive/1dint4ly-7h8Trw0XRJ1uhC_VKe_wDJfY>

## Tricks

- [10 tricks for a better Google Colab experience | by Cyprien NIELLY | Towards Data Science](https://towardsdatascience.com/10-tips-for-a-better-google-colab-experience-33f8fe721b82)
- [ColabTricks](https://jimut123.github.io/blogs/ML/ColabTricks.html)
