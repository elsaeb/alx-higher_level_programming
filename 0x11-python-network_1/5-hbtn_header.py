#!/usr/bin/python3
# -*- coding: utf-8 -*-
"""
Created on thur apr 20 07:02:53 2023

@author: elsaeb
"""
from requests import get
from sys import argv


if __name__ == "__main__":
    url = argv[1]
    response = get(url)
    info = response.headers
    print(info.get('x-request-id'))
