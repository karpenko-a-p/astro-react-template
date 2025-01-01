/**
 * !!! Необходимо импортировать регистрацию сервисов в начале каждой страницы !!!
 */

import { enableStaticRendering } from 'mobx-react-lite';
import { isServer } from '@application/utils/side';
import 'reflect-metadata';
import '@infrastructure/registration';
import '@persistence/registration';

enableStaticRendering(isServer);