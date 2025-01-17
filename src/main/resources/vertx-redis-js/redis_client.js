/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-redis-js/redis_client */
var utils = require('vertx-js/util/utils');
var Vertx = require('vertx-js/vertx');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JRedisClient = io.vertx.redis.RedisClient;
var KillFilter = io.vertx.redis.op.KillFilter;
var LimitOptions = io.vertx.redis.op.LimitOptions;
var SetOptions = io.vertx.redis.op.SetOptions;
var SortOptions = io.vertx.redis.op.SortOptions;
var MigrateOptions = io.vertx.redis.op.MigrateOptions;
var ScanOptions = io.vertx.redis.op.ScanOptions;
var RangeLimitOptions = io.vertx.redis.op.RangeLimitOptions;

/**
 @class
*/
var RedisClient = function(j_val) {

  var j_redisClient = j_val;
  var that = this;

  /**
   Close the client - when it is fully closed the handler will be called.

   @public
   @param handler {function} 
   */
  this.close = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_redisClient["close(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Append a value to a key

   @public
   @param key {string} Key string 
   @param value {string} Value to append 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.append = function(key, value, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["append(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, value, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Authenticate to the server

   @public
   @param password {string} Password for authentication 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.auth = function(password, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["auth(java.lang.String,io.vertx.core.Handler)"](password, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Asynchronously rewrite the append-only file

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.bgrewriteaof = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["bgrewriteaof(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Asynchronously save the dataset to disk

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.bgsave = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["bgsave(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Count set bits in a string

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.bitcount = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["bitcount(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Count set bits in a string

   @public
   @param key {string} Key string 
   @param start {number} Start index 
   @param end {number} End index 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.bitcountRange = function(key, start, end, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["bitcountRange(java.lang.String,long,long,io.vertx.core.Handler)"](key, start, end, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Perform bitwise operations between strings

   @public
   @param operation {Object} Bitwise operation to perform 
   @param destkey {string} Destination key where result is stored 
   @param keys {Array.<string>} List of keys on which to perform the operation 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.bitop = function(operation, destkey, keys, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2] instanceof Array && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["bitop(io.vertx.redis.op.BitOperation,java.lang.String,java.util.List,io.vertx.core.Handler)"](io.vertx.redis.op.BitOperation.valueOf(__args[0]), destkey, keys, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Find first bit set or clear in a string

   @public
   @param key {string} Key string 
   @param bit {number} What bit value to look for - must be 1, or 0 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.bitpos = function(key, bit, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["bitpos(java.lang.String,int,io.vertx.core.Handler)"](key, bit, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Find first bit set or clear in a string
  
   See also bitposRange() method, which takes start, and stop offset.

   @public
   @param key {string} Key string 
   @param bit {number} What bit value to look for - must be 1, or 0 
   @param start {number} Start offset 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.bitposFrom = function(key, bit, start, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["bitposFrom(java.lang.String,int,int,io.vertx.core.Handler)"](key, bit, start, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Find first bit set or clear in a string
  
   Note: when both start, and stop offsets are specified,
   behaviour is slightly different than if only start is specified

   @public
   @param key {string} Key string 
   @param bit {number} What bit value to look for - must be 1, or 0 
   @param start {number} Start offset 
   @param stop {number} End offset - inclusive 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.bitposRange = function(key, bit, start, stop, handler) {
    var __args = arguments;
    if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] ==='number' && typeof __args[4] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["bitposRange(java.lang.String,int,int,int,io.vertx.core.Handler)"](key, bit, start, stop, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove and get the first element in a list, or block until one is available

   @public
   @param key {string} Key string identifying a list to watch 
   @param seconds {number} Timeout in seconds 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.blpop = function(key, seconds, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["blpop(java.lang.String,int,io.vertx.core.Handler)"](key, seconds, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove and get the first element in any of the lists, or block until one is available

   @public
   @param keys {Array.<string>} List of key strings identifying lists to watch 
   @param seconds {number} Timeout in seconds 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.blpopMany = function(keys, seconds, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["blpopMany(java.util.List,int,io.vertx.core.Handler)"](keys, seconds, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove and get the last element in a list, or block until one is available

   @public
   @param key {string} Key string identifying a list to watch 
   @param seconds {number} Timeout in seconds 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.brpop = function(key, seconds, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["brpop(java.lang.String,int,io.vertx.core.Handler)"](key, seconds, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove and get the last element in any of the lists, or block until one is available

   @public
   @param keys {Array.<string>} List of key strings identifying lists to watch 
   @param seconds {number} Timeout in seconds 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.brpopMany = function(keys, seconds, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["brpopMany(java.util.List,int,io.vertx.core.Handler)"](keys, seconds, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Pop a value from a list, push it to another list and return it; or block until one is available

   @public
   @param key {string} Key string identifying the source list 
   @param destkey {string} Key string identifying the destination list 
   @param seconds {number} Timeout in seconds 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.brpoplpush = function(key, destkey, seconds, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["brpoplpush(java.lang.String,java.lang.String,int,io.vertx.core.Handler)"](key, destkey, seconds, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Kill the connection of a client

   @public
   @param filter {Object} Filter options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clientKill = function(filter, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clientKill(io.vertx.redis.op.KillFilter,io.vertx.core.Handler)"](filter != null ? new KillFilter(new JsonObject(JSON.stringify(filter))) : null, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the list of client connections

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.clientList = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clientList(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the current connection name

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.clientGetname = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clientGetname(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Stop processing commands from clients for some time

   @public
   @param millis {number} Pause time in milliseconds 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clientPause = function(millis, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clientPause(long,io.vertx.core.Handler)"](millis, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set the current connection name

   @public
   @param name {string} New name for current connection 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clientSetname = function(name, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clientSetname(java.lang.String,io.vertx.core.Handler)"](name, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Assign new hash slots to receiving node.

   @public
   @param slots {Array.<number>} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterAddslots = function(slots, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterAddslots(java.util.List,io.vertx.core.Handler)"](utils.convParamListLong(slots), function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return the number of failure reports active for a given node.

   @public
   @param nodeId {string} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterCountFailureReports = function(nodeId, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterCountFailureReports(java.lang.String,io.vertx.core.Handler)"](nodeId, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return the number of local keys in the specified hash slot.

   @public
   @param slot {number} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterCountkeysinslot = function(slot, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterCountkeysinslot(long,io.vertx.core.Handler)"](slot, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set hash slots as unbound in receiving node.

   @public
   @param slot {number} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterDelslots = function(slot, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterDelslots(long,io.vertx.core.Handler)"](slot, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set hash slots as unbound in receiving node.

   @public
   @param slots {Array.<number>} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterDelslotsMany = function(slots, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterDelslotsMany(java.util.List,io.vertx.core.Handler)"](utils.convParamListLong(slots), function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Forces a slave to perform a manual failover of its master.

   @public
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterFailover = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterFailover(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Forces a slave to perform a manual failover of its master.

   @public
   @param options {Object} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterFailOverWithOptions = function(options, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterFailOverWithOptions(io.vertx.redis.op.FailoverOptions,io.vertx.core.Handler)"](io.vertx.redis.op.FailoverOptions.valueOf(__args[0]), function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove a node from the nodes table.

   @public
   @param nodeId {string} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterForget = function(nodeId, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterForget(java.lang.String,io.vertx.core.Handler)"](nodeId, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return local key names in the specified hash slot.

   @public
   @param slot {number} 
   @param count {number} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterGetkeysinslot = function(slot, count, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterGetkeysinslot(long,long,io.vertx.core.Handler)"](slot, count, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Provides info about Redis Cluster node state.

   @public
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterInfo = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterInfo(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Returns the hash slot of the specified key.

   @public
   @param key {string} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterKeyslot = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterKeyslot(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Force a node cluster to handshake with another node.

   @public
   @param ip {string} 
   @param port {number} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterMeet = function(ip, port, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterMeet(java.lang.String,long,io.vertx.core.Handler)"](ip, port, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get Cluster config for the node.

   @public
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterNodes = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterNodes(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Reconfigure a node as a slave of the specified master node.

   @public
   @param nodeId {string} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterReplicate = function(nodeId, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterReplicate(java.lang.String,io.vertx.core.Handler)"](nodeId, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Reset a Redis Cluster node.

   @public
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterReset = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterReset(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Reset a Redis Cluster node.

   @public
   @param options {Object} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterResetWithOptions = function(options, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterResetWithOptions(io.vertx.redis.op.ResetOptions,io.vertx.core.Handler)"](io.vertx.redis.op.ResetOptions.valueOf(__args[0]), function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Forces the node to save cluster state on disk.

   @public
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterSaveconfig = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterSaveconfig(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set the configuration epoch in a new node.

   @public
   @param epoch {number} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterSetConfigEpoch = function(epoch, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterSetConfigEpoch(long,io.vertx.core.Handler)"](epoch, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Bind an hash slot to a specific node.

   @public
   @param slot {number} 
   @param subcommand {Object} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterSetslot = function(slot, subcommand, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterSetslot(long,io.vertx.redis.op.SlotCmd,io.vertx.core.Handler)"](slot, io.vertx.redis.op.SlotCmd.valueOf(__args[1]), function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Bind an hash slot to a specific node.

   @public
   @param slot {number} 
   @param subcommand {Object} 
   @param nodeId {string} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterSetslotWithNode = function(slot, subcommand, nodeId, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterSetslotWithNode(long,io.vertx.redis.op.SlotCmd,java.lang.String,io.vertx.core.Handler)"](slot, io.vertx.redis.op.SlotCmd.valueOf(__args[1]), nodeId, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   List slave nodes of the specified master node.

   @public
   @param nodeId {string} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.clusterSlaves = function(nodeId, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterSlaves(java.lang.String,io.vertx.core.Handler)"](nodeId, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get array of Cluster slot to node mappings

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.clusterSlots = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["clusterSlots(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get array of Redis command details

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.command = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["command(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get total number of Redis commands

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.commandCount = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["commandCount(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Extract keys given a full Redis command

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.commandGetkeys = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["commandGetkeys(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get array of specific Redis command details

   @public
   @param commands {Array.<string>} List of commands to get info for 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.commandInfo = function(commands, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["commandInfo(java.util.List,io.vertx.core.Handler)"](commands, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the value of a configuration parameter

   @public
   @param parameter {string} Configuration parameter 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.configGet = function(parameter, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["configGet(java.lang.String,io.vertx.core.Handler)"](parameter, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Rewrite the configuration file with the in memory configuration

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.configRewrite = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["configRewrite(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set a configuration parameter to the given value

   @public
   @param parameter {string} Configuration parameter 
   @param value {string} New value 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.configSet = function(parameter, value, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["configSet(java.lang.String,java.lang.String,io.vertx.core.Handler)"](parameter, value, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Reset the stats returned by INFO

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.configResetstat = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["configResetstat(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return the number of keys in the selected database

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.dbsize = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["dbsize(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get debugging information about a key

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.debugObject = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["debugObject(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Make the server crash

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.debugSegfault = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["debugSegfault(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Decrement the integer value of a key by one

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.decr = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["decr(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Decrement the integer value of a key by the given number

   @public
   @param key {string} Key string 
   @param decrement {number} Value by which to decrement 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.decrby = function(key, decrement, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["decrby(java.lang.String,long,io.vertx.core.Handler)"](key, decrement, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Delete a key

   @public
   @param keys {Array.<string>} List of keys to delete 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.del = function(keys, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["del(java.util.List,io.vertx.core.Handler)"](keys, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Discard all commands issued after MULTI

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.discard = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["discard(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return a serialized version of the value stored at the specified key.

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.dump = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["dump(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Echo the given string

   @public
   @param message {string} String to echo 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.echo = function(message, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["echo(java.lang.String,io.vertx.core.Handler)"](message, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Execute a Lua script server side

   @public
   @param script {string} Lua script to evaluate 
   @param keys {Array.<string>} List of keys 
   @param args {Array.<string>} List of argument values 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.eval = function(script, keys, args, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'object' && __args[2] instanceof Array && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["eval(java.lang.String,java.util.List,java.util.List,io.vertx.core.Handler)"](script, keys, args, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Execute a Lua script server side

   @public
   @param sha1 {string} SHA1 digest of the script cached on the server 
   @param keys {Array.<string>} List of keys 
   @param values {Array.<string>} List of values 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.evalsha = function(sha1, keys, values, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'object' && __args[2] instanceof Array && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["evalsha(java.lang.String,java.util.List,java.util.List,io.vertx.core.Handler)"](sha1, keys, values, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Execute all commands issued after MULTI

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.exec = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["exec(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Determine if a key exists

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.exists = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["exists(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set a key's time to live in seconds

   @public
   @param key {string} Key string 
   @param seconds {number} Time to live in seconds 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.expire = function(key, seconds, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["expire(java.lang.String,int,io.vertx.core.Handler)"](key, seconds, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set the expiration for a key as a UNIX timestamp

   @public
   @param key {string} Key string 
   @param seconds {number} Expiry time as Unix timestamp in seconds 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.expireat = function(key, seconds, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["expireat(java.lang.String,long,io.vertx.core.Handler)"](key, seconds, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove all keys from all databases

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.flushall = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["flushall(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove all keys from the current database

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.flushdb = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["flushdb(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the value of a key

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.get = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["get(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the value of a key - without decoding as utf-8

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.getBinary = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["getBinary(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Returns the bit value at offset in the string value stored at key

   @public
   @param key {string} Key string 
   @param offset {number} Offset in bits 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.getbit = function(key, offset, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["getbit(java.lang.String,long,io.vertx.core.Handler)"](key, offset, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get a substring of the string stored at a key

   @public
   @param key {string} Key string 
   @param start {number} Start offset 
   @param end {number} End offset - inclusive 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.getrange = function(key, start, end, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["getrange(java.lang.String,long,long,io.vertx.core.Handler)"](key, start, end, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set the string value of a key and return its old value

   @public
   @param key {string} Key of which value to set 
   @param value {string} New value for the key 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.getset = function(key, value, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["getset(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, value, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Delete one or more hash fields

   @public
   @param key {string} Key string 
   @param field {string} Field name 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.hdel = function(key, field, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["hdel(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, field, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Delete one or more hash fields

   @public
   @param key {string} Key string 
   @param fields {Array.<string>} Field names 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.hdelMany = function(key, fields, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["hdelMany(java.lang.String,java.util.List,io.vertx.core.Handler)"](key, fields, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Determine if a hash field exists

   @public
   @param key {string} Key string 
   @param field {string} Field name 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.hexists = function(key, field, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["hexists(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, field, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the value of a hash field

   @public
   @param key {string} Key string 
   @param field {string} Field name 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.hget = function(key, field, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["hget(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, field, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get all the fields and values in a hash

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.hgetall = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["hgetall(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Increment the integer value of a hash field by the given number

   @public
   @param key {string} Key string 
   @param field {string} Field name 
   @param increment {number} Value by which to increment 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.hincrby = function(key, field, increment, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["hincrby(java.lang.String,java.lang.String,long,io.vertx.core.Handler)"](key, field, increment, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Increment the float value of a hash field by the given amount

   @public
   @param key {string} Key string 
   @param field {string} Field name 
   @param increment {number} Value by which to increment 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.hincrbyfloat = function(key, field, increment, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["hincrbyfloat(java.lang.String,java.lang.String,double,io.vertx.core.Handler)"](key, field, increment, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get all the fields in a hash

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.hkeys = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["hkeys(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the number of fields in a hash

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.hlen = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["hlen(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the values of all the given hash fields

   @public
   @param key {string} Key string 
   @param fields {Array.<string>} Field names 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.hmget = function(key, fields, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["hmget(java.lang.String,java.util.List,io.vertx.core.Handler)"](key, fields, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set multiple hash fields to multiple values

   @public
   @param key {string} Key string 
   @param values {Array.<string>} Map of field:value pairs 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.hmset = function(key, values, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["hmset(java.lang.String,java.util.Map,io.vertx.core.Handler)"](key, values, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set the string value of a hash field

   @public
   @param key {string} Key string 
   @param field {string} Field name 
   @param value {string} New value 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.hset = function(key, field, value, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["hset(java.lang.String,java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, field, value, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set the value of a hash field, only if the field does not exist

   @public
   @param key {string} Key string 
   @param field {string} Field name 
   @param value {string} New value 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.hsetnx = function(key, field, value, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["hsetnx(java.lang.String,java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, field, value, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get all the values in a hash

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.hvals = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["hvals(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Increment the integer value of a key by one

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.incr = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["incr(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Increment the integer value of a key by the given amount

   @public
   @param key {string} Key string 
   @param increment {number} Value by which to increment 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.incrby = function(key, increment, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["incrby(java.lang.String,long,io.vertx.core.Handler)"](key, increment, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Increment the float value of a key by the given amount

   @public
   @param key {string} Key string 
   @param increment {number} Value by which to increment 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.incrbyfloat = function(key, increment, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["incrbyfloat(java.lang.String,double,io.vertx.core.Handler)"](key, increment, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get information and statistics about the server

   @public
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.info = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["info(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get information and statistics about the server

   @public
   @param section {string} Specific section of information to return 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.infoSection = function(section, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["infoSection(java.lang.String,io.vertx.core.Handler)"](section, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Find all keys matching the given pattern

   @public
   @param pattern {string} Pattern to limit the keys returned 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.keys = function(pattern, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["keys(java.lang.String,io.vertx.core.Handler)"](pattern, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the UNIX time stamp of the last successful save to disk

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.lastsave = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["lastsave(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get an element from a list by its index

   @public
   @param key {string} Key string 
   @param index {number} Index of list element to get 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.lindex = function(key, index, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["lindex(java.lang.String,int,io.vertx.core.Handler)"](key, index, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Insert an element before or after another element in a list

   @public
   @param key {string} Key string 
   @param option {Object} BEFORE or AFTER 
   @param pivot {string} Key to use as a pivot 
   @param value {string} Value to be inserted before or after the pivot 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.linsert = function(key, option, pivot, value, handler) {
    var __args = arguments;
    if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'string' && typeof __args[4] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["linsert(java.lang.String,io.vertx.redis.op.InsertOptions,java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, io.vertx.redis.op.InsertOptions.valueOf(__args[1]), pivot, value, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the length of a list

   @public
   @param key {string} String key 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.llen = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["llen(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove and get the first element in a list

   @public
   @param key {string} String key 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.lpop = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["lpop(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Prepend one or multiple values to a list

   @public
   @param key {string} Key string 
   @param values {Array.<string>} Values to be added at the beginning of the list, one by one 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.lpushMany = function(key, values, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["lpushMany(java.lang.String,java.util.List,io.vertx.core.Handler)"](key, values, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Prepend one value to a list

   @public
   @param key {string} Key string 
   @param value {string} Value to be added at the beginning of the list 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.lpush = function(key, value, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["lpush(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, value, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Prepend a value to a list, only if the list exists

   @public
   @param key {string} Key string 
   @param value {string} Value to add at the beginning of the list 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.lpushx = function(key, value, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["lpushx(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, value, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get a range of elements from a list

   @public
   @param key {string} Key string 
   @param from {number} Start index 
   @param to {number} Stop index 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.lrange = function(key, from, to, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["lrange(java.lang.String,long,long,io.vertx.core.Handler)"](key, from, to, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove elements from a list

   @public
   @param key {string} Key string 
   @param count {number} Number of first found occurrences equal to $value to remove from the list 
   @param value {string} Value to be removed 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.lrem = function(key, count, value, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["lrem(java.lang.String,long,java.lang.String,io.vertx.core.Handler)"](key, count, value, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set the value of an element in a list by its index

   @public
   @param key {string} Key string 
   @param index {number} Position within list 
   @param value {string} New value 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.lset = function(key, index, value, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["lset(java.lang.String,long,java.lang.String,io.vertx.core.Handler)"](key, index, value, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Trim a list to the specified range

   @public
   @param key {string} Key string 
   @param from {number} Start index 
   @param to {number} Stop index 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.ltrim = function(key, from, to, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["ltrim(java.lang.String,long,long,io.vertx.core.Handler)"](key, from, to, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the value of the given key

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.mget = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["mget(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the values of all the given keys

   @public
   @param keys {Array.<string>} List of keys to get 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.mgetMany = function(keys, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["mgetMany(java.util.List,io.vertx.core.Handler)"](keys, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Atomically transfer a key from a Redis instance to another one.

   @public
   @param host {string} Destination host 
   @param port {number} Destination port 
   @param key {string} Key to migrate 
   @param destdb {number} Destination database index 
   @param timeout {number} 
   @param options {Object} Migrate options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.migrate = function(host, port, key, destdb, timeout, options, handler) {
    var __args = arguments;
    if (__args.length === 7 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] ==='number' && typeof __args[4] ==='number' && typeof __args[5] === 'object' && typeof __args[6] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["migrate(java.lang.String,int,java.lang.String,int,long,io.vertx.redis.op.MigrateOptions,io.vertx.core.Handler)"](host, port, key, destdb, timeout, options != null ? new MigrateOptions(new JsonObject(JSON.stringify(options))) : null, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Listen for all requests received by the server in real time

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.monitor = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["monitor(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Move a key to another database

   @public
   @param key {string} Key to migrate 
   @param destdb {number} Destination database index 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.move = function(key, destdb, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["move(java.lang.String,int,io.vertx.core.Handler)"](key, destdb, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set multiple keys to multiple values

   @public
   @param keyvals {Array.<string>} Key value pairs to set 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.mset = function(keyvals, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["mset(java.util.Map,io.vertx.core.Handler)"](keyvals, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set multiple keys to multiple values, only if none of the keys exist

   @public
   @param keyvals {Array.<string>} Key value pairs to set 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.msetnx = function(keyvals, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["msetnx(java.util.Map,io.vertx.core.Handler)"](keyvals, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Mark the start of a transaction block

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.multi = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["multi(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Inspect the internals of Redis objects

   @public
   @param key {string} Key string 
   @param cmd {Object} Object sub command 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.object = function(key, cmd, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["object(java.lang.String,io.vertx.redis.op.ObjectCmd,io.vertx.core.Handler)"](key, io.vertx.redis.op.ObjectCmd.valueOf(__args[1]), function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove the expiration from a key

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.persist = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["persist(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set a key's time to live in milliseconds

   @public
   @param key {string} String key 
   @param millis {number} Time to live in milliseconds 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.pexpire = function(key, millis, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["pexpire(java.lang.String,long,io.vertx.core.Handler)"](key, millis, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set the expiration for a key as a UNIX timestamp specified in milliseconds

   @public
   @param key {string} Key string 
   @param millis {number} Expiry time as Unix timestamp in milliseconds 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.pexpireat = function(key, millis, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["pexpireat(java.lang.String,long,io.vertx.core.Handler)"](key, millis, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Adds the specified element to the specified HyperLogLog.

   @public
   @param key {string} Key string 
   @param element {string} Element to add 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.pfadd = function(key, element, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["pfadd(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, element, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Adds the specified elements to the specified HyperLogLog.

   @public
   @param key {string} Key string 
   @param elements {Array.<string>} Elementa to add 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.pfaddMany = function(key, elements, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["pfaddMany(java.lang.String,java.util.List,io.vertx.core.Handler)"](key, elements, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return the approximated cardinality of the set observed by the HyperLogLog at key.

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.pfcount = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["pfcount(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return the approximated cardinality of the set(s) observed by the HyperLogLog at key(s).

   @public
   @param keys {Array.<string>} List of keys 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.pfcountMany = function(keys, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["pfcountMany(java.util.List,io.vertx.core.Handler)"](keys, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Merge N different HyperLogLogs into a single one.

   @public
   @param destkey {string} Destination key 
   @param keys {Array.<string>} List of source keys 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.pfmerge = function(destkey, keys, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["pfmerge(java.lang.String,java.util.List,io.vertx.core.Handler)"](destkey, keys, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Ping the server

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.ping = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["ping(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set the value and expiration in milliseconds of a key

   @public
   @param key {string} Key string 
   @param millis {number} Number of milliseconds until the key expires 
   @param value {string} New value for key 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.psetex = function(key, millis, value, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["psetex(java.lang.String,long,java.lang.String,io.vertx.core.Handler)"](key, millis, value, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Listen for messages published to channels matching the given pattern

   @public
   @param pattern {string} Pattern string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.psubscribe = function(pattern, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["psubscribe(java.lang.String,io.vertx.core.Handler)"](pattern, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Listen for messages published to channels matching the given patterns

   @public
   @param patterns {Array.<string>} List of patterns 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.psubscribeMany = function(patterns, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["psubscribeMany(java.util.List,io.vertx.core.Handler)"](patterns, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Lists the currently active channels - only those matching the pattern

   @public
   @param pattern {string} A glob-style pattern - an empty string means no pattern 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.pubsubChannels = function(pattern, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["pubsubChannels(java.lang.String,io.vertx.core.Handler)"](pattern, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Returns the number of subscribers (not counting clients subscribed to patterns) for the specified channels

   @public
   @param channels {Array.<string>} List of channels 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.pubsubNumsub = function(channels, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["pubsubNumsub(java.util.List,io.vertx.core.Handler)"](channels, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Returns the number of subscriptions to patterns (that are performed using the PSUBSCRIBE command)

   @public
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.pubsubNumpat = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["pubsubNumpat(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the time to live for a key in milliseconds

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.pttl = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["pttl(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Post a message to a channel

   @public
   @param channel {string} Channel key 
   @param message {string} Message to send to channel 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.publish = function(channel, message, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["publish(java.lang.String,java.lang.String,io.vertx.core.Handler)"](channel, message, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Stop listening for messages posted to channels matching the given patterns

   @public
   @param patterns {Array.<string>} List of patterns to match against 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.punsubscribe = function(patterns, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["punsubscribe(java.util.List,io.vertx.core.Handler)"](patterns, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return a random key from the keyspace

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.randomkey = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["randomkey(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Rename a key

   @public
   @param key {string} Key string to be renamed 
   @param newkey {string} New key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.rename = function(key, newkey, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["rename(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, newkey, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Rename a key, only if the new key does not exist

   @public
   @param key {string} Key string to be renamed 
   @param newkey {string} New key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.renamenx = function(key, newkey, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["renamenx(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, newkey, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Create a key using the provided serialized value, previously obtained using DUMP.

   @public
   @param key {string} Key string 
   @param millis {number} Expiry time in milliseconds to set on the key 
   @param serialized {string} Serialized form of the key value as obtained using DUMP 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.restore = function(key, millis, serialized, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["restore(java.lang.String,long,java.lang.String,io.vertx.core.Handler)"](key, millis, serialized, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return the role of the instance in the context of replication

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.role = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["role(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove and get the last element in a list

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.rpop = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["rpop(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove the last element in a list, append it to another list and return it

   @public
   @param key {string} Key string identifying source list 
   @param destkey {string} Key string identifying destination list 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.rpoplpush = function(key, destkey, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["rpoplpush(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, destkey, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Append one or multiple values to a list

   @public
   @param key {string} Key string 
   @param values {Array.<string>} List of values to add to the end of the list 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.rpushMany = function(key, values, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["rpushMany(java.lang.String,java.util.List,io.vertx.core.Handler)"](key, values, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Append one or multiple values to a list

   @public
   @param key {string} Key string 
   @param value {string} Value to be added to the end of the list 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.rpush = function(key, value, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["rpush(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, value, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Append a value to a list, only if the list exists

   @public
   @param key {string} Key string 
   @param value {string} Value to be added to the end of the list 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.rpushx = function(key, value, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["rpushx(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, value, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Add a member to a set

   @public
   @param key {string} Key string 
   @param member {string} Value to be added to the set 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.sadd = function(key, member, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["sadd(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, member, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Add one or more members to a set

   @public
   @param key {string} Key string 
   @param members {Array.<string>} Values to be added to the set 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.saddMany = function(key, members, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["saddMany(java.lang.String,java.util.List,io.vertx.core.Handler)"](key, members, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Synchronously save the dataset to disk

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.save = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["save(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the number of members in a set

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.scard = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["scard(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Check existence of script in the script cache.

   @public
   @param script {string} SHA1 digest identifying a script in the script cache 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.scriptExists = function(script, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["scriptExists(java.lang.String,io.vertx.core.Handler)"](script, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Check existence of scripts in the script cache.

   @public
   @param scripts {Array.<string>} List of SHA1 digests identifying scripts in the script cache 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.scriptExistsMany = function(scripts, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["scriptExistsMany(java.util.List,io.vertx.core.Handler)"](scripts, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove all the scripts from the script cache.

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.scriptFlush = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["scriptFlush(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Kill the script currently in execution.

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.scriptKill = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["scriptKill(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Load the specified Lua script into the script cache.

   @public
   @param script {string} Lua script 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.scriptLoad = function(script, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["scriptLoad(java.lang.String,io.vertx.core.Handler)"](script, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Subtract multiple sets

   @public
   @param key {string} Key identifying the set to compare with all other sets combined 
   @param cmpkeys {Array.<string>} List of keys identifying sets to subtract from the key set 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.sdiff = function(key, cmpkeys, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["sdiff(java.lang.String,java.util.List,io.vertx.core.Handler)"](key, cmpkeys, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Subtract multiple sets and store the resulting set in a key

   @public
   @param destkey {string} Destination key where the result should be stored 
   @param key {string} Key identifying the set to compare with all other sets combined 
   @param cmpkeys {Array.<string>} List of keys identifying sets to subtract from the key set 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.sdiffstore = function(destkey, key, cmpkeys, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2] instanceof Array && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["sdiffstore(java.lang.String,java.lang.String,java.util.List,io.vertx.core.Handler)"](destkey, key, cmpkeys, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Change the selected database for the current connection

   @public
   @param dbindex {number} Index identifying the new active database 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.select = function(dbindex, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["select(int,io.vertx.core.Handler)"](dbindex, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set the string value of a key

   @public
   @param key {string} Key of which value to set 
   @param value {string} New value for the key 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.set = function(key, value, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["set(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, value, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set the string value of a key

   @public
   @param key {string} Key of which value to set 
   @param value {string} New value for the key 
   @param options {Object} Set options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.setWithOptions = function(key, value, options, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["setWithOptions(java.lang.String,java.lang.String,io.vertx.redis.op.SetOptions,io.vertx.core.Handler)"](key, value, options != null ? new SetOptions(new JsonObject(JSON.stringify(options))) : null, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set the binary string value of a key - without encoding as utf-8

   @public
   @param key {string} Key of which value to set 
   @param value {string} New value for the key 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.setBinary = function(key, value, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["setBinary(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, value, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Sets or clears the bit at offset in the string value stored at key

   @public
   @param key {string} Key string 
   @param offset {number} Bit offset 
   @param bit {number} New value - must be 1 or 0 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.setbit = function(key, offset, bit, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["setbit(java.lang.String,long,int,io.vertx.core.Handler)"](key, offset, bit, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set the value and expiration of a key

   @public
   @param key {string} Key string 
   @param seconds {number} Number of seconds until the key expires 
   @param value {string} New value for key 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.setex = function(key, seconds, value, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["setex(java.lang.String,long,java.lang.String,io.vertx.core.Handler)"](key, seconds, value, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Set the value of a key, only if the key does not exist

   @public
   @param key {string} Key of which value to set 
   @param value {string} New value for the key 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.setnx = function(key, value, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["setnx(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, value, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Overwrite part of a string at key starting at the specified offset

   @public
   @param key {string} Key string 
   @param offset {number} Offset - the maximum offset that you can set is 2^29 -1 (536870911), as Redis Strings are limited to 512 megabytes 
   @param value {string} Value to overwrite with 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.setrange = function(key, offset, value, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["setrange(java.lang.String,int,java.lang.String,io.vertx.core.Handler)"](key, offset, value, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Intersect multiple sets

   @public
   @param keys {Array.<string>} List of keys to perform intersection on 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.sinter = function(keys, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["sinter(java.util.List,io.vertx.core.Handler)"](keys, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Intersect multiple sets and store the resulting set in a key

   @public
   @param destkey {string} Key where to store the results 
   @param keys {Array.<string>} List of keys to perform intersection on 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.sinterstore = function(destkey, keys, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["sinterstore(java.lang.String,java.util.List,io.vertx.core.Handler)"](destkey, keys, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Determine if a given value is a member of a set

   @public
   @param key {string} Key string 
   @param member {string} Member to look for 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.sismember = function(key, member, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["sismember(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, member, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Make the server a slave of another instance

   @public
   @param host {string} Host to become this server's master 
   @param port {number} Port of our new master 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.slaveof = function(host, port, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["slaveof(java.lang.String,int,io.vertx.core.Handler)"](host, port, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Make this server a master

   @public
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.slaveofNoone = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["slaveofNoone(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Read the Redis slow queries log

   @public
   @param limit {number} Number of log entries to return. If value is less than zero all entries are returned 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.slowlogGet = function(limit, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["slowlogGet(int,io.vertx.core.Handler)"](limit, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the length of the Redis slow queries log

   @public
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.slowlogLen = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["slowlogLen(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Reset the Redis slow queries log

   @public
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.slowlogReset = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["slowlogReset(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get all the members in a set

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.smembers = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["smembers(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Move a member from one set to another

   @public
   @param key {string} Key of source set currently containing the member 
   @param destkey {string} Key identifying the destination set 
   @param member {string} Member to move 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.smove = function(key, destkey, member, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["smove(java.lang.String,java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, destkey, member, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Sort the elements in a list, set or sorted set

   @public
   @param key {string} Key string 
   @param options {Object} Sort options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.sort = function(key, options, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["sort(java.lang.String,io.vertx.redis.op.SortOptions,io.vertx.core.Handler)"](key, options != null ? new SortOptions(new JsonObject(JSON.stringify(options))) : null, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove and return a random member from a set

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.spop = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["spop(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove and return random members from a set

   @public
   @param key {string} Key string 
   @param count {number} Number of members to remove 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.spopMany = function(key, count, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["spopMany(java.lang.String,int,io.vertx.core.Handler)"](key, count, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get one or multiple random members from a set

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.srandmember = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["srandmember(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get one or multiple random members from a set

   @public
   @param key {string} Key string 
   @param count {number} Number of members to get 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.srandmemberCount = function(key, count, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["srandmemberCount(java.lang.String,int,io.vertx.core.Handler)"](key, count, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove one member from a set

   @public
   @param key {string} Key string 
   @param member {string} Member to remove 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.srem = function(key, member, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["srem(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, member, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove one or more members from a set

   @public
   @param key {string} Key string 
   @param members {Array.<string>} Members to remove 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.sremMany = function(key, members, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["sremMany(java.lang.String,java.util.List,io.vertx.core.Handler)"](key, members, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the length of the value stored in a key

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.strlen = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["strlen(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Listen for messages published to the given channels

   @public
   @param channel {string} Channel to subscribe to 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.subscribe = function(channel, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["subscribe(java.lang.String,io.vertx.core.Handler)"](channel, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Listen for messages published to the given channels

   @public
   @param channels {Array.<string>} List of channels to subscribe to 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.subscribeMany = function(channels, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["subscribeMany(java.util.List,io.vertx.core.Handler)"](channels, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Add multiple sets

   @public
   @param keys {Array.<string>} List of keys identifying sets to add up 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.sunion = function(keys, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["sunion(java.util.List,io.vertx.core.Handler)"](keys, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Add multiple sets and store the resulting set in a key

   @public
   @param destkey {string} Destination key 
   @param keys {Array.<string>} List of keys identifying sets to add up 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.sunionstore = function(destkey, keys, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["sunionstore(java.lang.String,java.util.List,io.vertx.core.Handler)"](destkey, keys, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Internal command used for replication

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.sync = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["sync(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return the current server time

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.time = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["time(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the time to live for a key

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.ttl = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["ttl(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Determine the type stored at key

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.type = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["type(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Stop listening for messages posted to the given channels

   @public
   @param channels {Array.<string>} List of channels to subscribe to 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.unsubscribe = function(channels, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["unsubscribe(java.util.List,io.vertx.core.Handler)"](channels, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Forget about all watched keys

   @public
   @param handler {function} 
   @return {RedisClient}
   */
  this.unwatch = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["unwatch(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Wait for the synchronous replication of all the write commands sent in the context of the current connection.

   @public
   @param numSlaves {number} 
   @param timeout {number} 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.wait = function(numSlaves, timeout, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["wait(long,long,io.vertx.core.Handler)"](numSlaves, timeout, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Watch the given keys to determine execution of the MULTI/EXEC block

   @public
   @param key {string} Key to watch 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.watch = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["watch(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Watch the given keys to determine execution of the MULTI/EXEC block

   @public
   @param keys {Array.<string>} List of keys to watch 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.watchMany = function(keys, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["watchMany(java.util.List,io.vertx.core.Handler)"](keys, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Add one or more members to a sorted set, or update its score if it already exists

   @public
   @param key {string} Key string 
   @param score {number} Score used for sorting 
   @param member {string} New member key 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zadd = function(key, score, member, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zadd(java.lang.String,double,java.lang.String,io.vertx.core.Handler)"](key, score, member, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Add one or more members to a sorted set, or update its score if it already exists

   @public
   @param key {string} Key string 
   @param members {Array.<string>} New member keys and their scores 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zaddMany = function(key, members, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zaddMany(java.lang.String,java.util.Map,io.vertx.core.Handler)"](key, members, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the number of members in a sorted set

   @public
   @param key {string} Key string 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zcard = function(key, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zcard(java.lang.String,io.vertx.core.Handler)"](key, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Count the members in a sorted set with scores within the given values

   @public
   @param key {string} Key string 
   @param min {number} Minimum score 
   @param max {number} Maximum score 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zcount = function(key, min, max, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zcount(java.lang.String,double,double,io.vertx.core.Handler)"](key, min, max, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Increment the score of a member in a sorted set

   @public
   @param key {string} Key string 
   @param increment {number} Increment amount 
   @param member {string} Member key 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zincrby = function(key, increment, member, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zincrby(java.lang.String,double,java.lang.String,io.vertx.core.Handler)"](key, increment, member, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Intersect multiple sorted sets and store the resulting sorted set in a new key

   @public
   @param destkey {string} Destination key 
   @param sets {Array.<string>} List of keys identifying sorted sets to intersect 
   @param options {Object} Aggregation options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zinterstore = function(destkey, sets, options, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zinterstore(java.lang.String,java.util.List,io.vertx.redis.op.AggregateOptions,io.vertx.core.Handler)"](destkey, sets, io.vertx.redis.op.AggregateOptions.valueOf(__args[2]), function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Intersect multiple sorted sets and store the resulting sorted set in a new key using weights for scoring

   @public
   @param destkey {string} Destination key 
   @param sets {Array.<string>} List of keys identifying sorted sets to intersect 
   @param options {Object} Aggregation options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zinterstoreWeighed = function(destkey, sets, options, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zinterstoreWeighed(java.lang.String,java.util.Map,io.vertx.redis.op.AggregateOptions,io.vertx.core.Handler)"](destkey, sets, io.vertx.redis.op.AggregateOptions.valueOf(__args[2]), function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Count the number of members in a sorted set between a given lexicographical range

   @public
   @param key {string} Key string 
   @param min {string} Pattern to compare against for minimum value 
   @param max {string} Pattern to compare against for maximum value 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zlexcount = function(key, min, max, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zlexcount(java.lang.String,java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, min, max, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return a range of members in a sorted set, by index

   @public
   @param key {string} Key string 
   @param start {number} Start index for the range 
   @param stop {number} Stop index for the range - inclusive 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zrange = function(key, start, stop, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zrange(java.lang.String,long,long,io.vertx.core.Handler)"](key, start, stop, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return a range of members in a sorted set, by index

   @public
   @param key {string} Key string 
   @param start {number} Start index for the range 
   @param stop {number} Stop index for the range - inclusive 
   @param options {Object} Range options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zrangeWithOptions = function(key, start, stop, options, handler) {
    var __args = arguments;
    if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] === 'string' && typeof __args[4] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zrangeWithOptions(java.lang.String,long,long,io.vertx.redis.op.RangeOptions,io.vertx.core.Handler)"](key, start, stop, io.vertx.redis.op.RangeOptions.valueOf(__args[3]), function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return a range of members in a sorted set, by lexicographical range

   @public
   @param key {string} Key string 
   @param min {string} Pattern representing a minimum allowed value 
   @param max {string} Pattern representing a maximum allowed value 
   @param options {Object} Limit options where limit can be specified 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zrangebylex = function(key, min, max, options, handler) {
    var __args = arguments;
    if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && typeof __args[4] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zrangebylex(java.lang.String,java.lang.String,java.lang.String,io.vertx.redis.op.LimitOptions,io.vertx.core.Handler)"](key, min, max, options != null ? new LimitOptions(new JsonObject(JSON.stringify(options))) : null, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return a range of members in a sorted set, by score

   @public
   @param key {string} Key string 
   @param min {string} Pattern defining a minimum value 
   @param max {string} Pattern defining a maximum value 
   @param options {Object} Range and limit options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zrangebyscore = function(key, min, max, options, handler) {
    var __args = arguments;
    if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && typeof __args[4] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zrangebyscore(java.lang.String,java.lang.String,java.lang.String,io.vertx.redis.op.RangeLimitOptions,io.vertx.core.Handler)"](key, min, max, options != null ? new RangeLimitOptions(new JsonObject(JSON.stringify(options))) : null, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Determine the index of a member in a sorted set

   @public
   @param key {string} Key string 
   @param member {string} Member in the sorted set identified by key 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zrank = function(key, member, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zrank(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, member, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove one member from a sorted set

   @public
   @param key {string} Key string 
   @param member {string} Member in the sorted set identified by key 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zrem = function(key, member, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zrem(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, member, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove one or more members from a sorted set

   @public
   @param key {string} Key string 
   @param members {Array.<string>} Members in the sorted set identified by key 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zremMany = function(key, members, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zremMany(java.lang.String,java.util.List,io.vertx.core.Handler)"](key, members, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove all members in a sorted set between the given lexicographical range

   @public
   @param key {string} Key string 
   @param min {string} Pattern defining a minimum value 
   @param max {string} Pattern defining a maximum value 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zremrangebylex = function(key, min, max, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zremrangebylex(java.lang.String,java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, min, max, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove all members in a sorted set within the given indexes

   @public
   @param key {string} Key string 
   @param start {number} Start index 
   @param stop {number} Stop index 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zremrangebyrank = function(key, start, stop, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zremrangebyrank(java.lang.String,long,long,io.vertx.core.Handler)"](key, start, stop, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Remove all members in a sorted set within the given scores

   @public
   @param key {string} Key string 
   @param min {string} Pattern defining a minimum value 
   @param max {string} Pattern defining a maximum value 
   @param handler {function} 
   @return {RedisClient}
   */
  this.zremrangebyscore = function(key, min, max, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zremrangebyscore(java.lang.String,java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, min, max, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return a range of members in a sorted set, by index, with scores ordered from high to low

   @public
   @param key {string} Key string 
   @param start {number} Start index for the range 
   @param stop {number} Stop index for the range - inclusive 
   @param options {Object} Range options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zrevrange = function(key, start, stop, options, handler) {
    var __args = arguments;
    if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] === 'string' && typeof __args[4] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zrevrange(java.lang.String,long,long,io.vertx.redis.op.RangeOptions,io.vertx.core.Handler)"](key, start, stop, io.vertx.redis.op.RangeOptions.valueOf(__args[3]), function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return a range of members in a sorted set, by score, between the given lexicographical range with scores ordered from high to low

   @public
   @param key {string} Key string 
   @param max {string} Pattern defining a maximum value 
   @param min {string} Pattern defining a minimum value 
   @param options {Object} Limit options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zrevrangebylex = function(key, max, min, options, handler) {
    var __args = arguments;
    if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && typeof __args[4] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zrevrangebylex(java.lang.String,java.lang.String,java.lang.String,io.vertx.redis.op.LimitOptions,io.vertx.core.Handler)"](key, max, min, options != null ? new LimitOptions(new JsonObject(JSON.stringify(options))) : null, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Return a range of members in a sorted set, by score, with scores ordered from high to low

   @public
   @param key {string} Key string 
   @param max {string} Pattern defining a maximum value 
   @param min {string} Pattern defining a minimum value 
   @param options {Object} Range and limit options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zrevrangebyscore = function(key, max, min, options, handler) {
    var __args = arguments;
    if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && typeof __args[4] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zrevrangebyscore(java.lang.String,java.lang.String,java.lang.String,io.vertx.redis.op.RangeLimitOptions,io.vertx.core.Handler)"](key, max, min, options != null ? new RangeLimitOptions(new JsonObject(JSON.stringify(options))) : null, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Determine the index of a member in a sorted set, with scores ordered from high to low

   @public
   @param key {string} Key string 
   @param member {string} Member in the sorted set identified by key 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zrevrank = function(key, member, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zrevrank(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, member, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Get the score associated with the given member in a sorted set

   @public
   @param key {string} Key string 
   @param member {string} Member in the sorted set identified by key 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zscore = function(key, member, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zscore(java.lang.String,java.lang.String,io.vertx.core.Handler)"](key, member, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Add multiple sorted sets and store the resulting sorted set in a new key

   @public
   @param destkey {string} Destination key 
   @param sets {Array.<string>} List of keys identifying sorted sets 
   @param options {Object} Aggregation options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zunionstore = function(destkey, sets, options, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zunionstore(java.lang.String,java.util.List,io.vertx.redis.op.AggregateOptions,io.vertx.core.Handler)"](destkey, sets, io.vertx.redis.op.AggregateOptions.valueOf(__args[2]), function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Add multiple sorted sets using weights, and store the resulting sorted set in a new key

   @public
   @param key {string} Destination key 
   @param sets {Array.<string>} Map containing set-key:weight pairs 
   @param options {Object} Aggregation options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zunionstoreWeighed = function(key, sets, options, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zunionstoreWeighed(java.lang.String,java.util.Map,io.vertx.redis.op.AggregateOptions,io.vertx.core.Handler)"](key, sets, io.vertx.redis.op.AggregateOptions.valueOf(__args[2]), function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Incrementally iterate the keys space

   @public
   @param cursor {string} Cursor id 
   @param options {Object} Scan options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.scan = function(cursor, options, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && typeof __args[2] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["scan(java.lang.String,io.vertx.redis.op.ScanOptions,io.vertx.core.Handler)"](cursor, options != null ? new ScanOptions(new JsonObject(JSON.stringify(options))) : null, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Incrementally iterate Set elements

   @public
   @param key {string} Key string 
   @param cursor {string} Cursor id 
   @param options {Object} Scan options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.sscan = function(key, cursor, options, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["sscan(java.lang.String,java.lang.String,io.vertx.redis.op.ScanOptions,io.vertx.core.Handler)"](key, cursor, options != null ? new ScanOptions(new JsonObject(JSON.stringify(options))) : null, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Incrementally iterate hash fields and associated values

   @public
   @param key {string} Key string 
   @param cursor {string} Cursor id 
   @param options {Object} Scan options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.hscan = function(key, cursor, options, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["hscan(java.lang.String,java.lang.String,io.vertx.redis.op.ScanOptions,io.vertx.core.Handler)"](key, cursor, options != null ? new ScanOptions(new JsonObject(JSON.stringify(options))) : null, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  /**
   Incrementally iterate sorted sets elements and associated scores

   @public
   @param key {string} Key string 
   @param cursor {string} Cursor id 
   @param options {Object} Scan options 
   @param handler {function} Handler for the result of this call. 
   @return {RedisClient}
   */
  this.zscan = function(key, cursor, options, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && typeof __args[3] === 'function') {
      return utils.convReturnVertxGen(j_redisClient["zscan(java.lang.String,java.lang.String,io.vertx.redis.op.ScanOptions,io.vertx.core.Handler)"](key, cursor, options != null ? new ScanOptions(new JsonObject(JSON.stringify(options))) : null, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    }), RedisClient);
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_redisClient;
};

/**

 @memberof module:vertx-redis-js/redis_client
 @param vertx {Vertx} 
 @param config {Object} 
 @return {RedisClient}
 */
RedisClient.create = function(vertx, config) {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object') {
    return utils.convReturnVertxGen(JRedisClient["create(io.vertx.core.Vertx,io.vertx.core.json.JsonObject)"](vertx._jdel, utils.convParamJsonObject(config)), RedisClient);
  } else utils.invalidArgs();
};

// We export the Constructor function
module.exports = RedisClient;