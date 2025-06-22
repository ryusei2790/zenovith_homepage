"use server";

import { NextResponse } from 'next/server';
import { createClient } from 'microcms-js-sdk';
import fs from 'fs/promises';
import path from 'path';

