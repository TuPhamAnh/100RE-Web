/**
 * 100RE LAB WORKSPACE — Storage Service Provider Interface
 * Abstraction layer decoupling file management from the underlying storage engine.
 */

import { GoogleDriveService } from './googleDrive.js';

export const StorageService = {
  /**
   * Upload file to active storage provider (Google Drive 5 TB)
   */
  async uploadFile({ name, mimeType, content, folderId = null, metadata = {}, env = {} }) {
    return GoogleDriveService.uploadFile({ name, mimeType, content, folderId, metadata, env });
  },

  /**
   * Download file from active storage provider
   */
  async downloadFile({ fileId, env = {} }) {
    return GoogleDriveService.downloadFile({ driveFileId: fileId, env });
  },

  /**
   * Create folder in storage provider
   */
  async createFolder({ name, parentFolderId = null, env = {} }) {
    return GoogleDriveService.createFolder({ name, parentFolderId, env });
  },

  /**
   * Delete file from storage provider
   */
  async deleteFile({ fileId, env = {} }) {
    return GoogleDriveService.deleteFile({ driveFileId: fileId, env });
  }
};
